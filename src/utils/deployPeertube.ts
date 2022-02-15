import type { default as Peertube } from "../types/peertube";
import type { IProfile } from "../types/Profile";
import { Network } from "../types/kubernetes";

import { selectGatewayNode, getUniqueDomainName } from "./gatewayHelpers";
import createNetwork from "./createNetwork";
import deploy from "./deploy";
import rootFs from "./rootFs";
import destroy from "./destroy";

const {
  DiskModel,
  MachineModel,
  MachinesModel,
  GatewayNameModel,
  generateString,
} = window.configs?.grid3_client ?? {};

export default async function deployPeertube(
  data: Peertube,
  profile: IProfile
) {
  // gateway model: <solution-type><twin-id><solution_name>
  let domainName = await getUniqueDomainName(
    "grid",
    "pt",
    data.name,
    profile,
    "Peertube"
  );

  // Dynamically select node to deploy the gateway
  let [publicNodeId, nodeDomain] = await selectGatewayNode();
  data.domain = `${domainName}.${nodeDomain}`;

  // deploy peertube
  const deploymentInfo = await deployPeertubeVM(profile, data);

  const planetaryIP = deploymentInfo["planetary"] as string;

  try {
    // deploy the gateway
    await deployPrefixGateway(profile, domainName, planetaryIP, publicNodeId);
  } catch (error) {
    // rollback peertube deployment if gateway deployment failed
    await destroy(profile, "Peertube", data.name);
    throw error;
  }

  return { deploymentInfo };
}

async function deployPeertubeVM(profile: IProfile, data: Peertube) {
  const {
    name,
    cpu,
    memory,
    disks: [{ size }],
    publicIp,
    nodeId,
    adminEmail,
    adminPassword,
    envs,
    domain,
  } = data;

  // sub deployments model (vm, disk, net): <type><random_suffix>
  let randomSuffix = generateString(10).toLowerCase();

  // Network Specs
  const net = new Network();
  net.name = `net${randomSuffix}`;
  const network = createNetwork(net);

  // Disk Specs
  const disk = new DiskModel();
  disk.name = `disk${randomSuffix}`;
  disk.size = size;
  disk.mountpoint = "/data";

  // VM Specs
  const vm = new MachineModel();
  vm.name = `vm${randomSuffix}`;
  vm.node_id = nodeId;
  vm.disks = [disk];
  vm.public_ip = publicIp;
  vm.planetary = true;
  vm.cpu = cpu;
  vm.memory = memory;
  vm.rootfs_size = rootFs(cpu, memory);
  vm.flist =
    "https://hub.grid.tf/omarabdul3ziz.3bot/threefoldtech-peertube-v3.1.flist";
  vm.entrypoint = "/usr/local/bin/entrypoint.sh";
  vm.env = {
    SSH_KEY: profile.sshKey,
    PEERTUBE_ADMIN_EMAIL: adminEmail,
    PT_INITIAL_ROOT_PASSWORD: adminPassword,
    PEERTUBE_WEBSERVER_HOSTNAME: domain,
    PEERTUBE_WEBSERVER_PORT: "443",
    PEERTUBE_DB_SUFFIX: "_prod",
    PEERTUBE_DB_USERNAME: "peertube",
    PEERTUBE_DB_PASSWORD: "peertube",
  };

  // VMS Specs
  const vms = new MachinesModel();
  vms.name = name;
  vms.network = network;
  vms.machines = [vm];

  // deploy
  return deploy(profile, "Peertube", name, async (grid) => {
    // For invalidating the cashed keys in the KV store, getObj check if the key has no deployments. it is deleted.
    await grid.machines.getObj(name);
    return grid.machines
      .deploy(vms)
      .then(() => grid.machines.getObj(name))
      .then(([vm]) => vm);
  });
}

async function deployPrefixGateway(
  profile: IProfile,
  domainName: string,
  backend: string,
  publicNodeId: number
) {
  // Gateway Specs
  const gw = new GatewayNameModel();
  gw.name = domainName;
  gw.node_id = publicNodeId;
  gw.tls_passthrough = false;
  gw.backends = [`http://[${backend}]:9000`];

  return deploy(profile, "GatewayName", domainName, async (grid) => {
    // For invalidating the cashed keys in the KV store, getObj check if the key has no deployments. it is deleted.
    await grid.machines.getObj(domainName);
    return grid.gateway
      .deploy_name(gw)
      .then(() => grid.gateway.getObj(domainName))
      .then(([gw]) => gw);
  });
}

import type { default as VM } from "../types/vm";
import type { IProfile } from "../types/Profile";
import deploy from "./deploy";

import { getUniqueName, selectGatewayNode } from "./gatewayHelpers";

const { HTTPMessageBusClient } = window.configs?.client ?? {};
const {
  GridClient,
  NetworkModel,
  DiskModel,
  MachineModel,
  MachinesModel,
  GatewayNameModel,
  generateString,
} = window.configs?.grid3_client ?? {};

export default async function deployPeertube(data: VM, profile: IProfile) {
  const {
    envs,
    disks: [{ size }],
    ...base
  } = data;
  let { name, flist, cpu, memory, entrypoint, network: nw } = base;
  const { publicIp, planetary, nodeId, rootFsSize } = base;
  const { mnemonics, storeSecret, networkEnv, sshKey } = profile;

  const http = new HTTPMessageBusClient(0, "");
  const client = new GridClient(
    networkEnv as any,
    mnemonics,
    storeSecret,
    http,
    undefined,
    "tfkvstore" as any
  );

  await client.connect();

  // Make sure the name is valid
  name = await getUniqueName(client, name);
  let gwName = (name.slice(0, 10) + generateString(3)).toLowerCase();
  console.log(gwName);
  let workloadSuffix = Math.floor(Math.random() * 10000000);

  // Dynamically select node to deploy the gateway
  let [gwNodeId, gwDomain] = await selectGatewayNode();
  const domain = `${gwName}.${gwDomain}`;
  console.log(domain);

  // define a network
  const network = new NetworkModel();
  network.name = "PTNT" + workloadSuffix;
  network.ip_range = "10.1.0.0/16";

  // deploy the peertube
  await deployPeertubeVM(
    profile,
    client,
    network,
    nodeId,
    name,
    domain,
    cpu,
    memory,
    size,
    sshKey,
    workloadSuffix
  );

  // get the info of peertube deployment
  const peertubeInfo = await getPeertubeInfo(client, name);
  const planetaryIP = peertubeInfo[0]["planetary"];

  // deploy the gateway
  await deployPrefixGateway(profile, client, gwName, planetaryIP, gwNodeId);

  // get the info of the deployed gateway
  const gatewayInfo = await getGatewayInfo(client, gwName);
  const gatewayDomain = gatewayInfo[0]["domain"];
  return { domain, planetaryIP };
}

async function deployPeertubeVM(
  profile: IProfile,
  client: any,
  net: any,
  nodeId: any,
  name: string,
  domain: string,
  cpu: number,
  memory: number,
  diskSize: number,
  sshKey: string,
  workloadSuffix: number
) {
  // disk
  const disk = new DiskModel();
  disk.name = "PTD" + workloadSuffix;
  disk.size = diskSize;
  disk.mountpoint = "/data";

  // vm specs
  const vm = new MachineModel();
  vm.name = "PTVM" + workloadSuffix;
  vm.node_id = nodeId;
  vm.disks = [disk];
  vm.public_ip = false;
  vm.planetary = true;
  vm.cpu = cpu;
  vm.memory = memory;
  vm.rootfs_size = 4;
  vm.flist =
    "https://hub.grid.tf/tf-official-apps/threefoldtech-peertube-v3.0.flist";
  vm.entrypoint = "/usr/local/bin/entrypoint.sh";
  vm.env = {
    SSH_KEY: sshKey,
    PEERTUBE_ADMIN_EMAIL: "support@incubid.com",
    PEERTUBE_WEBSERVER_HOSTNAME: domain,
    PEERTUBE_WEBSERVER_PORT: "443",
    PEERTUBE_DB_SUFFIX: "_prod",
    PEERTUBE_DB_USERNAME: "peertube",
    PEERTUBE_DB_PASSWORD: "peertube",
  };

  // vms specs
  const vms = new MachinesModel();
  vms.name = name;
  vms.network = net;
  vms.machines = [vm];

  // deploy
  return deploy(profile, "Peertube", name, (grid) => {
    return grid.machines
      .deploy(vms)
      .then(() => grid.machines.getObj(name))
      .then(([vm]) => vm);
  });
}

async function deployPrefixGateway(
  profile: IProfile,
  client: any,
  gwName: string,
  backend: string,
  gwNodeId: number
) {
  // define specs
  const gw = new GatewayNameModel();
  gw.name = gwName;
  gw.node_id = gwNodeId;
  gw.tls_passthrough = false;
  gw.backends = [`http://[${backend}]:9000`];

  return deploy(profile, "GatewayName", gwName, (grid) => {
    return grid.gateway
      .deploy_name(gw)
      .then(() => grid.gateway.getObj(gwName))
      .then(([gw]) => gw);
  });
}

async function getPeertubeInfo(client: any, name: string) {
  const info = await client.machines.getObj(name);
  return info;
}

async function getGatewayInfo(client: any, name: string) {
  const info = await client.gateway.getObj(name);
  return info;
}

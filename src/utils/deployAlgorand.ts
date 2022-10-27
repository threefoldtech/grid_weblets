import type { ActiveProfile } from "../stores/activeProfile";
import type Algorand from "../types/algorand";

import { Network } from "../types/kubernetes";
import createNetwork from "./createNetwork";

import deploy from "./deploy";
import checkVMExist from "./prepareDeployment";

export default async function deployAlgorand(
  data: Algorand,
  profile: ActiveProfile
) {
  const deploymentInfo = await depoloyAlgorandVM(data, profile);
  return { deploymentInfo };
}

async function depoloyAlgorandVM(data: Algorand, profile: ActiveProfile) {
  const { MachinesModel, DiskModel, MachineModel, generateString } =
    window.configs.grid3_client;
  const {
    name,
    cpu,
    memory,
    nodeId,
    rootSize,
    publicIp,
    planetary,
    nodeNetwork,
    mnemonics,
    firstRound,
    lastRound,
    nodeType,
  } = data;

  // sub deployments model (vm, disk, net): <type><random_suffix>
  let randomSuffix = generateString(10).toLowerCase();

  // Private network
  const network = createNetwork(
    new Network(`nw${randomSuffix}`, "10.200.0.0/16")
  );

  // Disk Specs
  const disk = new DiskModel();
  disk.name = `disk${randomSuffix}`;
  disk.size = 50;
  disk.mountpoint = "/var/lib/docker";

  // Machine specs
  const machine = new MachineModel();
  machine.name = name; //`vm${randomSuffix}`;
  machine.cpu = cpu;
  machine.memory = memory;
  machine.disks = nodeType == "indexer" ? [disk] : [];
  machine.node_id = nodeId;
  machine.public_ip = publicIp;
  machine.planetary = planetary;
  machine.qsfs_disks = [];
  machine.rootfs_size = rootSize;
  machine.flist = "https://hub.grid.tf/tf-official-apps/algorand-latest.flist";
  machine.entrypoint = "/sbin/zinit init";
  machine.env = {
    SSH_KEY: profile.ssh,
    NETWORK: nodeNetwork,
    NODE_TYPE: nodeType,
    ACCOUNT_MNEMONICS: mnemonics,
    FIRST_ROUND: `${firstRound}`,
    LAST_ROUND: `${lastRound}`,
  };

  // Machines specs
  const machines = new MachinesModel();
  machines.name = name;
  machines.machines = [machine];
  machines.network = network;
  machines.description = "Algorand node";

  const metadate = {
    type: "vm",
    name: name,
    projectName: "Algorand",
  };
  machines.metadata = JSON.stringify(metadate);

  // Deploy
  return deploy(profile, "Algorand", name, async (grid) => {
    await checkVMExist(grid, "algorand", name);

    return grid.machines
      .deploy(machines)
      .then(() => grid.machines.getObj(name))
      .then(([vm]) => vm);
  });
}

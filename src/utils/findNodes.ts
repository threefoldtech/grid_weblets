import type { ISelectOption } from "../types";
import type { IProfile } from "../types/Profile";
import type { FilterOptions } from "grid3_client";
const { GridClient, Nodes, Graphql } = window.configs?.grid3_client ?? {};

export default function findNodes(
  filters: FilterOptions,
  profile: IProfile,
  exclusiveFor = ""
): Promise<ISelectOption[]> {
  return new Promise(async (res) => {
    const { networkEnv } = profile;
    const grid = new GridClient("" as any, "", "", null);

    const { graphql, rmbProxy } = grid.getDefaultUrls(networkEnv as any);
    const nodes = new Nodes(graphql, rmbProxy);

    try {
      let avilableNodes = await nodes.filterNodes(filters);

      if (!filters.publicIPs && exclusiveFor != "") {
        const blockedNodes = await getBlockedNodesIDs(
          exclusiveFor,
          rmbProxy,
          graphql
        );

        console.log("all nodes");
        console.log(avilableNodes);
        console.log("blocked nodes");
        console.log(blockedNodes);

        // remove the blocked nodes from the nodes the first page
        avilableNodes = exclude(blockedNodes, avilableNodes);

        let pageNumber = 1;
        // check if there are more pages
        while (avilableNodes.length === 0) {
          try {
            pageNumber += 1;
            avilableNodes = await nodes.filterNodes({
              ...filters,
              page: pageNumber,
            });
            console.log("inside while loop");
            console.log(avilableNodes);
            avilableNodes = exclude(blockedNodes, avilableNodes);
          } catch (err) {
            console.log("End of the pages.");
            break;
          }
        }
      }

      const resNodes = avilableNodes.map((node) => {
        return {
          label: `NodeID(${node.nodeId})`,
          value: node.nodeId,
        } as ISelectOption;
      });
      res(resNodes);
    } catch (err) {
      console.log("Error findNodes", err);
      res([]);
    }
  });
}

async function getBlockedNodesIDs(
  exclusiveFor: string,
  rmbProxy: string,
  graphql: string
): Promise<number[]> {
  // This step for preventing select a node that already has a deployment of the same type.
  // For now, it is only used with presearch.
  const gqlClient = new Graphql(graphql);

  // get the total number of deployment of the same type
  const res1 = (await gqlClient.query(`query MyQuery {
          nodeContractsConnection(orderBy: id_ASC, where: {deploymentData_contains: "${exclusiveFor}", state_eq: Created}) {
            totalCount
          }
        }`)) as any;
  const totalNumber = res1.data.nodeContractsConnection.totalCount;

  // get the nodeIds of the deployments
  const res2 = (await gqlClient.query(`query MyQuery {
            nodeContracts(where: {deploymentData_contains: "${exclusiveFor}", state_eq: Created}, limit: ${totalNumber}) {
              nodeID
            }
          }`)) as any;
  const nodeIds = res2.data.nodeContracts.map((n) => n.nodeID);

  // get the farmIds of all the used nodes. "in Set to remove duplicates"
  let farmIds = new Set();
  for (let nodeId of nodeIds) {
    const res = await fetch(`${rmbProxy}/nodes/${nodeId}`);
    farmIds.add((await res.json())["farmId"]);
  }
  let farmIdsarr = Array.from(farmIds);

  // get all the nodeIds of all the farms
  let farmNodesIDs = [];
  for (let farmId of farmIdsarr) {
    const res = await gqlClient.query(
      `query MyQuery {
              nodes(where: {farmID_eq: ${farmId}}) {
                nodeID
              }
            }`
    );
    farmNodesIDs.push(...res.data["nodes"]);
  }
  return farmNodesIDs;
}

function exclude(_this, _from) {
  return _from.filter((item) => !_this.includes(item.nodeId));
}

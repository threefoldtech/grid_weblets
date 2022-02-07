const { GridClient, Nodes, randomChoice } = window.configs?.grid3_client ?? {};

export async function selectGatewayNode(): Promise<[number, string]> {
  const nodes = new Nodes(
    GridClient.config.graphqlURL,
    GridClient.config.rmbClient["proxyURL"]
  );

  const selectedNode = randomChoice(await nodes.filterNodes({ gateway: true }));

  const nodeId = selectedNode.nodeId;
  const nodeDomain = selectedNode.publicConfig.domain;

  return [nodeId, nodeDomain];
}

export async function getUniqueDomainName(client, solution_type, name) {
  let twin_id = await client.twins.get_my_twin_id();
  return `${solution_type}${twin_id}${name.toLowerCase()}`;
}

function GraphNode() {
    this.pos = new Vector(Math.random() * 1000, Math.random() * 1000); // random nodes' position
    this.edges = [];  // nodes' array
}
GraphNode.prototype.connect = function(other) { // function for connecting the nodes
    this.edges.push(other);
    other.edges.push(this);
};
GraphNode.prototype.hasEdge = function(other) { // function for discovering if there is a nearby edge
  for(var i = 0; i < this.edges.length; i++)
      if(this.edges[i] == other)
          return true;
};

function treeGraph(depth, branches) { // funtion for buliding the tree
    var graph = [];
    function buildNode(depth) { // bulding the nodes with a recursive function: 
        var node = new GraphNode();
        graph.push(node); // push the first node inside the array
        if(depth > 1)
            for(var i = 0; i < branches; i++)
                node.connect(buildNode(depth-1)); // recursive step -> build the rest of the tree with the depth - 1
        return node;
    }
    buildNode(depth);
    return graph;
}
class Graph {

  constructor(noofVertices) {
    this.noofVertices = noofVertices;
    this.adjList = new Map();
  }

  
  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);

    this.adjList.get(w).push(v);
  }


  printGraph() {
    
    let get_keys = this.adjList.keys();

 
    for (let i of get_keys) {
      let get_values = this.adjList.get(i);
      let conc = "";

      for (let j of get_values) conc += j + " ";

      console.log(i + " -> " + conc);
    }
  }
}

let g = new Graph(6);

g.addVertex(`y`);
g.addVertex(`u`);
g.addVertex(`s`);
g.addVertex(`u`);
g.addVertex(`f`);

g.addEdge(`y`, `f`);
g.addEdge(`s`, `y`);

g.printGraph();
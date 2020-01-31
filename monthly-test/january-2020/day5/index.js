class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }
  
    dequeue() {
        return this.shift();
    }
  
    peek() {
        return this[0];
    }
  
    isEmpty() {
        return this.length === 0;
    }
}
  
  
// The below example shows a framework of Graph class. We define two private variable i.e noOfVertices to store the number of vertices in the graph and AdjList, which stores a adjacency list of a particular vertex. We used a Map Object provided by ES6 in order to implement Adjacency list. Where key of a map holds a vertex and values holds an array of an adjacent node

// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
      this.noOfVertices = noOfVertices;
      this.AdjList = new Map();
    }
     // addVertex(v) – It adds the vertex v as key to adjList and initialize its values with an array.
    addVertex(v)
    {
      // initialize the adjacent list with a
      // null array
      this.AdjList.set(v, []);
    }
  
    // addEdge(src, dest) – It adds an edge between the src and dest.
    addEdge(v, w)
    {
      // get the list for vertex v and put the
      // vertex w denoting edge between v and w
      this.AdjList.get(v).push(w);
  
      // Since graph is undirected,
      // add an edge from w to v also
      this.AdjList.get(w).push(v);
    }
  
    // Prints the vertex and adjacency list
    printGraph()
    {
      // get all the vertices
      var get_keys = this.AdjList.keys();
   
      // iterate over the vertices
      for (var i of get_keys) 
        {
          // great the corresponding adjacency list
          // for the vertex
          var get_values = this.AdjList.get(i);
          var conc = "";
   
          // iterate over the adjacency list
          // concatenate the values into a string
          for (var j of get_values)
              conc += j + " ";
   
          // print the vertex and its adjacency list
          console.log(i + " -> " + conc);
        }
    }

    bfs(startingnode) {
        let visited = [];

        let q = new Queue();

        visited[startingnode] = true;
        q.enqueue(startingnode);

        while(!q.isEmpty()) {
            let element = q.dequeue();

            // console.log(element);
            console.log(this.AdjList);
            let neighbours = this.AdjList.get(element);
            
            for(let i in neighbours) {
                let neighbour = neighbours[i];
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    q.enqueue(neighbour);
                    // console.log(1);
            // console.log(neighbour);

                }
            }
        }
    }
  
    //implement your code here
    findShortestPathLengthUsingBFS(source,  destination){
      let q = new Queu
      console.log(source, destination)
    }
  
}
  
// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
// adding vertices
for (var i = 0; i < vertices.length; i++) {
g.addVertex(vertices[i]);
}
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
  
// prints all vertex and
// its adjacency list
// A -> B C
// B -> A D E
// C -> A
// D -> B E F
// E -> B D F
// F -> D E
g.printGraph();
g.bfs(`A`);

  
class Solution{
    constructor(){
    }
    findShortestPathLength(source, destination){
        g.findShortestPathLengthUsingBFS(source, destination);
    }
}
  
let solution = new Solution();
let source = prompt("Please enter your source");
let destination = prompt("Please enter your destination");
solution.findShortestPathLength(source, destination);

//time complexity is O(n+m)
// space complexity is O(n)
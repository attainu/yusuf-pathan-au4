// // Ways of Rendering hello world using react
// let rootElement = document.getElementById("root");
// let hello = React.createElement("span", { className:"myclass" }, "Hello world");    
// console.log(hello)
// // rootElement.appendChild(hello);  // Method 1
// ReactDOM.render(hello, rootElement)

const rootElement = document.getElementById("root");
const hello = <span> Hello World</span>
const button = <button>Add</button>
ReactDOM.render(
    <div> 
        {hello}
        {button}
    </div>,
    rootElement);


// To render variable in jsx syntax we have to use {}
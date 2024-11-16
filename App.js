/* 
  <div id="parent">
    <div id="child1">
        <h1>Hello world</h1>
        <h1>Hello world</h1>
    </div> 
    <div id="child2">
        <h1>Hello world</h1>
        <h1>Hello world</h1>
    </div>
    </div>
*/

const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const divElement1 = React.createElement("div", { id: "child1" }, [
  heading,
  heading,
]);
const divElement2 = React.createElement("div", { id: "child2" }, [
  heading,
  heading,
]);
const parentDivElement = React.createElement("div", { id: "parent" }, [
  divElement1,
  divElement2,
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDivElement);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const children = React.createElement(
  "h1",
  {},
  "This is a heading with a tree structure"
);
const child = React.createElement("div", { id: "child" }, children);
const parent = React.createElement("div", { id: "parent" }, child);

root.render(parent);

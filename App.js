const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is react tag"),
    React.createElement("h2", {}, "this is react tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is react tag"),
    React.createElement("h2", {}, "this is react tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

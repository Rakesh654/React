const head = React.createElement("h1", {id:"heading"}, "Hello world");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(head);


const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"},
    [React.createElement("h1", {id:"heading"}, "I am nested heading"), React.createElement("h2", {id:"heading2"}, "I am nested heading")]
    ));

    root.render(parent);

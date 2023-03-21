const heading = 
React.createElement("div", {id: 'parent'}, [

React.createElement("div", {id: 'child'}, [
React.createElement("h1",{}, "I am h1 tag"),
React.createElement("h2",{}, "I am h2 tag")
]),

React.createElement("div", {id: 'child2'}, [
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("h2",{}, "I am h2 tag")
]),
React.createElement("div", {id: 'child3'}, [
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("h2",{}, "I am h2 tag")
]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

// <div id="parent">
// <div id="child">
// <h1></h1>
// <h2></h2>
// </div>
// </div>
// 
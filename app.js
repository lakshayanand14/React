const heading1 = React.createElement("h1", { id: "heading1" }, "Welcome to React Page")
const heading4 = React.createElement("h4", {
    id: "introduction"
}, "React is a JavaScript library for building user interfaces.React is used to build single-page applications.React allows us to create reusable UI components.")
const paragraph = React.createElement("p", {
    id: "paragraph"
}, "React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed! React finds out what changes have been made, and changes only what needs to be changed.")
const container = React.createElement("div", {
    id:"container"
},[heading1,heading4,paragraph])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
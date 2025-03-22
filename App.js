import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Hello World 🌍");

// JSX - is not HTML in JS , HTML or XML like syntax
// JSX (transpiled before it reaches the js) - parcel - Babel
// const jsxheading = (<h1 className="heading">Namaste React using JSX </h1>)

//React Functional Component

// const HeadingComponent = () => {
//     return <h1>Namaste React functional Component</h1>
// }


const ele = <span>React Element</span>

const Title = () => (
    <h1 className="head" tabIndex="5">
        {ele}
        Namaste Title JSX
    </h1>
)


// Component composition
const HadingComponent2 = () => (
    <div id="container">
        {ele}
        {Title()}
        <Title />
        <Title></Title>
        <h1>Namste React functinal Component</h1>
    </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HadingComponent2 />);
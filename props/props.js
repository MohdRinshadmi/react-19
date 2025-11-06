// In React, props (short for "properties") are the primary means of passing data and functions from a parent 
// component to its child components. Props:

// Are read-only and immutable within the child.

// Allow components to be dynamic and reusable since you can customize them with different values.

// Work like function parameters for components—each React component function accepts a props object argument.

// Props Drilling refers to the process of passing data through several layers of components via props, even when intermediate components
//  do not need to use that data themselves.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Sara" />;
}

// Here, name="Sara" is a prop passed from App to Welcome.


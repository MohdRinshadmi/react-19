// For side effects at specific lifecycle moments.

useEffect(() => {
  fetch('/api/data').then(res => res.json()).then(setData);
}, []); // empty dependency array means run once on mount
// For side effects at specific lifecycle moments.
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // empty dependency array means run once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default MyComponent;

// Mount 
// In React, "mount" refers to the process when a component is created and inserted into the DOM for the first time. 
// It is the initial phase of the component's lifecycle, where React sets up the component, renders its content, and presents it on the screen.

// During mounting:
// The component is constructed and initialized (in class components, the constructor runs).
// The component's render method runs to generate the JSX.
// React inserts the component into the DOM.
// After insertion, lifecycle methods like componentDidMount (class components) or effects with empty dependency arrays 
// in useEffect (functional components) run. These are used for setup tasks such as fetching data, setting up event listeners, or 
// initializing state based on DOM.

// Example:

// import React from "react";
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Constructor: component is being created");
//     this.state = { data: null };
//   }

//   componentDidMount() {
//     console.log("componentDidMount: component mounted to the DOM");
//     // Simulate fetching data on mount
//     setTimeout(() => this.setState({ data: "Hello, world!" }), 1000);
//   }

//   render() {
//     console.log("Render: returning JSX");
//     return <div>{this.state.data || "Loading..."}</div>;
//   }
// }
// When this component is first added to the React tree, the constructor runs, then render, then after the JSX is added to the DOM, 
// componentDidMount executes.
// This runs once during mounting and fetches data with a simulated async delay.

// Functional Component Mount Example with useEffect
// import React, { useState, useEffect } from "react";

// function MyComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log("useEffect: component mounted");
//     // Simulate fetching data on mount
//     setTimeout(() => setData("Hello, world!"), 1000);
//   }, []); // empty dependencies = run only on mount

//   return <div>{data || "Loading..."}</div>;
// }

// useEffect with an empty dependency array runs only once after the component is inserted into the DOM, making it equivalent to componentDidMount.
// This pattern is recommended for fetching and initializing when using functional components.
// Both examples illustrate the "mount" lifecycle phase where initialization, rendering, and async setup occur.​





// Unmount
// Unmounting in React is the process when a component is removed from the DOM, cleaning up its resources such as timers, 
// event listeners, and subscriptions. It signifies the end of the component's lifecycle, ensuring no memory leaks occur.
// import React from "react";

// class Timer extends React.Component {
//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log("Timer tick");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log("Timer component is about to be removed");
//     clearInterval(this.intervalId); // Cleanup timer to prevent memory leaks
//   }

//   render() {
//     return <div>Timer is running. Check console.</div>;
//   }
// }

// class App extends React.Component {
//   state = { showTimer: true };

//   toggleTimer = () => {
//     this.setState((prev) => ({ showTimer: !prev.showTimer }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleTimer}>
//           {this.state.showTimer ? "Unmount Timer" : "Mount Timer"}
//         </button>
//         {this.state.showTimer && <Timer />}
//       </div>
//     );
//   }
// }

// export default App;

// Functional Component Example with useEffect Cleanup

// import React, { useState, useEffect } from "react";

// function Timer() {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("Timer tick");
//     }, 1000);

//     return () => {
//       console.log("Timer component is about to be removed");
//       clearInterval(intervalId); // Clean up on unmount
//     };
//   }, []);

//   return <div>Timer is running. Check console.</div>;
// }

// function App() {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowTimer(!showTimer)}>
//         {showTimer ? "Unmount Timer" : "Mount Timer"}
//       </button>
//       {showTimer && <Timer />}
//     </div>
//   );
// }

// export default App;



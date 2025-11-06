// To optimize functions used as props.
import { useCallback } from 'react';

function CounterButton({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // function reference stable unless dependencies change

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButton onClick={handleClick} />
    </div>
  );
}

export default MyComponent;

// The useCallback hook in React is used to memoize functions so that the same instance of a function is returned between renders unless 
// its dependencies change. This helps prevent unnecessary re-creation of functions, which is important for optimization when passing callbacks 
// to child components that rely on referential equality (e.g., wrapped in React.memo).

// What is useCallback?
// useCallback(fn, deps) returns a memoized version of the callback fn.

// The memoized function only changes if one of the deps (dependencies) changes.

// It helps avoid unnecessary re-renders or re-executions caused by new function references on every render.

// When to use useCallback?
// When passing callback functions to optimized child components that rely on React.memo or similar optimizations.

// When you want to avoid re-creating a function unnecessarily on each render.

// When a callback is used in dependencies of other hooks (like useEffect) and you want to control when it updates.

// import React, { useState, useCallback } from "react";

// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click me</button>;
// });

// export default function Parent() {
//   const [count, setCount] = useState(0);

//   // Memoize the increment function so Child doesn't rerender unnecessarily
//   const increment = useCallback(() => {
//     setCount(c => c + 1);
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <Child onClick={increment} />
//     </div>
//   );
// }

// Without useCallback, increment would be a new function every render, causing Child to rerender despite being wrapped in React.memo.

// Using useCallback ensures increment stays the same between renders unless dependencies change.

// This improves rendering performance especially when child components are complex or render heavy.

// Summary
// Use useCallback to memoize event handlers or functions passed to memoized child components.

// Helps prevent unnecessary re-renders triggered by function identity changes.

// Most beneficial in components with performance concerns or deep component trees.
// For mutable values and direct DOM manipulation.

import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default MyComponent;

// The useRef hook in React is used to create a mutable reference that persists across component renders without causing re-renders when updated. It is commonly used for accessing and manipulating DOM elements directly or storing mutable values like timers, previous states, or any value you want to keep across renders without triggering UI updates.

// What is useRef?
// useRef(initialValue) returns a ref object with a .current property initialized to initialValue.

// The .current value persists between renders and can be read or updated imperatively.

// Unlike state, changing .current does not trigger a component re-render.

// When to use useRef?
// Access and manipulate DOM elements directly (e.g., focusing an input).

// Store mutable values like timer IDs or previous props/state to avoid re-renders.

// Keep values across renders without causing render cycles.
// Example: DOM Access and Focus Input with useRef

// import React, { useRef } from "react";

// function InputFocus() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus(); // Imperatively focus the input
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Focus me" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default InputFocus;

// Example: Storing Timer ID with useRef
// import React, { useEffect, useRef } from "react";

// function Timer() {
//   const timerIdRef = useRef();

//   useEffect(() => {
//     timerIdRef.current = setInterval(() => {
//       console.log("Tick");
//     }, 1000);

//     return () => clearInterval(timerIdRef.current); // Clean up on unmount
//   }, []);

//   return <div>Check console for ticks every second.</div>;
// }

// export default Timer;
// useRef is ideal for accessing DOM elements, storing mutable values that don't trigger rerenders, and preserving values across renders.

// It provides a way to avoid unnecessary re-renders when you want to handle mutable data imperatively.

// This hook is essential when you need direct DOM manipulations or persistent mutable variables without re-rendering your React components


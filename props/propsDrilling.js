function App() {
  const user = "Alice";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <div>Hello, {user}!</div>;
}

// The user prop must be passed manually through Parent and Child, even if only GrandChild uses it.

// Downsides of Prop Drilling
// Makes code harder to maintain and refactor, especially in deep component trees.

// Intermediate components get cluttered with props they don't actually use.

// Increases risk of accidental prop modifications or bugs when the tree structure changes.

// Alternatives to prop drilling include React Context, Redux, or other state management tools, which let you 
// share data across many components without manually passing props through every level.



// Prop drilling harms performance in React primarily because it can trigger unnecessary re-renders of intermediate 
// components that do not actually use the passed props but still receive and forward them down the tree. When a prop changes, 
// React re-renders every component receiving that prop, even if the component itself doesnt depend on it, causing wasted rendering 
// work and slower UI updates.

// Alternatives like React Context or state management libraries (Redux, Recoil) help mitigate these problems by providing more direct 
// and efficient ways to share data across components, reducing re-renders and improving maintainability

// Q: Show code to reproduce prop drilling causing slow renders
import React, { useState } from "react";

// Deeply nested components

function GreatGrandparent({ counter }) {
  console.log("GreatGrandparent rendered");
  return <Grandparent counter={counter} />;
}

function Grandparent({ counter }) {
  console.log("Grandparent rendered");
  return <Parent counter={counter} />;
}

function Parent({ counter }) {
  console.log("Parent rendered");
  return <Child counter={counter} />;
}

function Child({ counter }) {
  console.log("Child rendered");
  return <GrandChild counter={counter} />;
}

function GrandChild({ counter }) {
  console.log("GrandChild rendered");
  return <div>Counter value: {counter}</div>;
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const [other, setOther] = useState(false);

  console.log("App rendered");

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <button onClick={() => setOther(!other)}>
        Toggle Other State
      </button>
      <GreatGrandparent counter={counter} />
    </div>
  );
}
// When the counter state updates, it is passed down as a prop from GreatGrandparent to GrandChild through multiple layers.

// All intermediate components (Grandparent, Parent, Child) re-render even though they do not use the counter value directly.

// This causes unnecessary rendering work and slows down the UI as component depth and complexity grow.

// The Toggle Other State button demonstrates unrelated state changes that do not cause counter-related render, isolating the effect of 
// prop drilling.

// This example prints logs in the console showing every component render, illustrating the performance cost of prop drilling. Using React Context 
// or memoization can mitigate such unnecessary renders.


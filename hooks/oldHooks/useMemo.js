// To optimize expensive calculations.

// import { useMemo } from 'react';

// function FilteredList({ items }) {
//   const filteredItems = useMemo(() => {
//     return items.filter(item => item.active);
//   }, [items]);

//   return (
//     <ul>
//       {filteredItems.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default FilteredList;

// The useMemo hook in React is used to memoize (cache) the result of an expensive calculation so that it doesn’t recompute on every render
//  unless its dependencies change. This optimizes performance by preventing unnecessary recalculations.

// When to use useMemo:
// When you have resource-intensive computations (like filtering, sorting, or processing large arrays) inside your component that should not
//  run on every render.

// When you want to avoid passing new object/array references to child components that could trigger unnecessary re-renders.

// To optimize rendering performance especially when used alongside components wrapped with React.memo.

// How useMemo works:
// It takes two arguments — a function that returns the computed value and an array of dependencies. React recalculates the value only if
//  any dependency changes; otherwise, it returns the cached value.

// import React, { useMemo, useState } from "react";

// function ExpensiveCalculation({ num }) {
//   const factorial = useMemo(() => {
//     console.log("Calculating factorial...");
//     const calculateFactorial = (n) => (n <= 1 ? 1 : n * calculateFactorial(n - 1));
//     return calculateFactorial(num);
//   }, [num]);

//   return <div>Factorial of {num}: {factorial}</div>;
// }

// function App() {
//   const [count, setCount] = useState(1);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ExpensiveCalculation num={count} />
//     </div>
//   );
// }

// export default App;
// The factorial calculation runs only when num changes.

// Without useMemo, the factorial function would execute every render, degrading performance with expensive calculations.

// In React 19, some memoization is improved automatically by the compiler, but useMemo remains useful for explicitly optimizing
//  expensive value computations and preventing unnecessary recalculations.​

// concise example comparing the use of useMemo versus no memoization for an expensive calculation inside a React component:

// import React, { useState, useMemo } from "react";

// // Simulate an expensive calculation
// function expensiveCalculation(num) {
//   console.log("Running expensive calculation...");
//   let result = 0;
//   for (let i = 0; i < 1e7; i++) {
//     result += num * Math.random();
//   }
//   return result;
// }

// function WithUseMemo({ number }) {
//   // Only re-calculates when 'number' changes
//   const computed = useMemo(() => expensiveCalculation(number), [number]);

//   return <div>With useMemo: {computed}</div>;
// }

// function WithoutUseMemo({ number }) {
//   // Runs on every render, even if 'number' hasn't changed
//   const computed = expensiveCalculation(number);

//   return <div>Without useMemo: {computed}</div>;
// }

// function App() {
//   const [count, setCount] = useState(1);
//   const [other, setOther] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Change Number</button>
//       <button onClick={() => setOther(!other)}>Toggle Other State</button>
//       <WithUseMemo number={count} />
//       <WithoutUseMemo number={count} />
//     </div>
//   );
// }

// export default App;

// The WithUseMemo component caches the expensive calculation result and skips recalculation if the number prop hasn't changed.

// The WithoutUseMemo component runs the expensive calculation every time the component re-renders, even if the number prop is the same.

// Toggling the unrelated state other causes re-renders, triggering recalculations in WithoutUseMemo but not in WithUseMemo.

// Using useMemo improves performance by memoizing the calculation and avoiding unnecessary work on renders.

// This example clearly shows how useMemo can optimize expensive computations by caching results between renders.​

// For global/shared state without prop drilling.

const theme = useContext(ThemeContext);
return <div style={{ background: theme.background }}>Content</div>;
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      This component is themed!
    </div>
  );
}

export default ThemedComponent;

// The useContext hook in React allows functional components to consume values from a React Context, enabling easy sharing of state or data
// across multiple component levels without the need to pass props manually at every level (prop drilling).

// What is useContext?
// useContext takes a context object created with React.createContext().

// It returns the current context value provided by the nearest matching Context Provider above in the component tree.

// React re-renders components consuming the context when the context value changes.

// When to use useContext?
// To share global data or state across many components, like themes, user authentication, language, or settings.

// To avoid cumbersome prop drilling, where props would have to be passed through many component layers unnecessarily.

// Example: Sharing a User Name Across Components

// import React, { createContext, useContext, useState } from "react";

// // Create a Context to hold the user info
// const UserContext = createContext();

// function UserProvider({ children }) {
//   const [user, setUser] = useState("Linus");

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// function DisplayUser() {
//   const { user } = useContext(UserContext);

//   return <h2>Hello, {user}!</h2>;
// }

// function ChangeUser() {
//   const { setUser } = useContext(UserContext);

//   return (
//     <button onClick={() => setUser("Ada")}>
//       Change User to Ada
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <UserProvider>
//       <DisplayUser />
//       <ChangeUser />
//     </UserProvider>
//   );
// }

// UserContext holds the user state.
// UserProvider wraps child components providing user data and setter.
// DisplayUser and ChangeUser consume context via useContext without props.
// Any change to context state triggers all consuming components to re-render automatically.
// This hook is ideal for managing shared state or data across wide component trees smoothly and efficiently.



// Here is a comparison of useContext, prop drilling, and Redux for managing global state in React:

// | Aspect         | Prop Drilling                                        | useContext                                                                              | Redux                                                                            |
// | -------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
// | Concept        | Passing props through many nested components         | React hook to consume globally provided context                                         | External state management library with centralized store and strict flow         |
// | Usage Scenario | Small to medium apps; when few components need state | Small to medium apps where avoiding prop drilling is desirable                          | Large-scale apps with complex, multi-layered state logic and side effects        |
// | Complexity     | Simple but can become cumbersome as tree deepens     | Simple setup; avoids prop drilling but can cause excessive re-renders if not fine-tuned | Formal setup with actions, reducers, middleware; steeper learning curve          |
// | Performance    | No extra re-renders but causes deep prop passing     | Updates can cause re-render of all consumers, may need optimization                     | Maintains performance with predictable state flow, minimizes unnecessary renders |
// | Boilerplate    | Minimal (just props)                                 | Minimal but may grow with multiple contexts                                             | More boilerplate for actions, reducers, store config                             |
// | State Scope    | Scoped locally, manually passed down                 | Scoped globally within the provider's subtree                                           | Truly global state across entire app                                             |
// | Best For       | Simple apps or isolated data passing                 | Avoiding prop drilling on limited global state                                          | Complex apps requiring predictable state and debugging tools                     |

// Prop drilling is straightforward but inefficient and tedious for large or deeply nested components.
// useContext provides a cleaner way to avoid prop drilling for moderate global state but can cause broader re-renders and is less suited
//  for very complex state management.
// Redux offers a powerful, scalable global state solution with strict patterns and dev tools, ideal for complex applications but with more setup.
// You often start with useContext for lightweight needs and migrate to Redux or similar libraries as app complexity grows.

// small example that replaces prop drilling with React Context to share data across nested components more cleanly:
// Without Context (Prop Drilling)
function GreatGrandparent() {
  const user = "Alice";
  return <Grandparent user={user} />;
}

function Grandparent({ user }) {
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <div>Hello, {user}!</div>;
}
// The user prop is passed down through each component manually (prop drilling).

// With Context (No Prop Drilling)
import React, { createContext, useContext } from "react";

// Create a UserContext
const UserContext = createContext();

function GreatGrandparent() {
  const user = "Alice";
  return (
    <UserContext.Provider value={user}>
      <Grandparent />
    </UserContext.Provider>
  );
}

function Grandparent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  const user = useContext(UserContext); // Consume user from context
  return <div>Hello, {user}!</div>;
}
// The user is provided once via UserContext.Provider.

// Only the consuming component (Child) accesses the context using useContext.

// No need to manually pass user through Grandparent and Parent.

// This pattern eliminates prop drilling by making data available globally to nested consumers without explicitly threading props
//  through intermediate levels. It simplifies code and improves maintainability for shared or global data


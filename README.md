# react-19
# React 19 Hooks Demo

>This project demonstrates both classic and new React hooks, with practical examples for each. Every hook is implemented in its own file so developers can quickly learn how and why to use them in real projects.

## New Hooks (React 19+)

- **use**: Suspends rendering until a promise resolves, enabling declarative data fetching with Suspense.
- **useActionState**: Manages async actions (e.g., form submissions), tracking result, pending state, and errors with minimal boilerplate.
- **useFormStatus**: Lets child components access parent `<form>` status (pending, data, method) without prop drilling or context.
- **useOptimistic**: Enables optimistic UI updates, instantly reflecting expected changes while async mutations are pending.

## Classic Hooks

- **useCallback**: Memoizes functions to prevent unnecessary re-creation, optimizing components that rely on referential equality.
- **useContext**: Consumes values from React Context for global/shared state, avoiding prop drilling.
- **useEffect**: Handles side effects at specific lifecycle moments (mount, update, unmount).
- **useMemo**: Memoizes expensive calculations, optimizing performance by preventing unnecessary recalculations.
- **useRef**: Creates mutable references for direct DOM manipulation or persistent values across renders.

---

## How to Use
- Browse each hook’s file for a clear, commented example.
- Copy patterns into your own projects to adopt best practices for state, effects, and async logic in React 19.
- Each hook is isolated for easy learning and experimentation.

---

**Feel free to extend these examples or ask for more advanced patterns!**

Classic Hooks
useCallback: Memoizes functions to prevent unnecessary re-creation, optimizing components that rely on referential equality.
useContext: Consumes values from React Context for global/shared state, avoiding prop drilling.
useEffect: Handles side effects at specific lifecycle moments (mount, update, unmount).
useMemo: Memoizes expensive calculations, optimizing performance by preventing unnecessary recalculations.
useRef: Creates mutable references for direct DOM manipulation or persistent values across renders.

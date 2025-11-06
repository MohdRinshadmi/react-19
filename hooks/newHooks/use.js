// Simplifies handling promises declaratively inside components with Suspense integration for smoother data fetching.
import React, { use } from "react";

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Alice", age: 25 }), 2000);
  });
}

function UserProfile() {
//   Suspends rendering until the promise resolves
  const user = use(fetchUser());

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// export default UserProfile;

// The use hook accepts a promise, suspending rendering until the promise resolves.

// Works seamlessly with React’s Suspense component to show fallback UI during loading.

// Makes data fetching declarative and concise, minimizing manual state management around async operations.

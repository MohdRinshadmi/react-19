// Simplifies managing state for async actions like form submissions.

// Automatically tracks the result, pending state, and error handling of an action.

// Reduces boilerplate by returning the action data, a wrapped action function to invoke, and a loading/pending boolean.

import React from "react";
import { useActionState } from "react-dom";

function submitForm(data) {
// Simulated async form submission returning a promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Form submitted successfully!" });
    }, 2000);
  });
}

function MyForm() {
  const [formData, setFormData] = React.useState({ name: "" });

  // useActionState wraps the async form action
  const [result, runAction, isPending] = useActionState(submitForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    runAction(formData); // Start async submission tracked by useActionState
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ name: e.target.value })}
        placeholder="Your name"
        required
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {result && <p>{result.message}</p>}
    </form>
  );
}

export default MyForm;

// useActionState receives the async function submitForm.

// It returns [result, runAction, isPending] where:

// result contains the resolved value of the async action,

// runAction is a wrapped function to trigger the async call,

// isPending is a boolean indicating the action progress.

// The submit button is disabled during submission, and the success message shows after completion.

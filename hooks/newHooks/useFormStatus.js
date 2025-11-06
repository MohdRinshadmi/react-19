// Provides child components direct access to their parent <form> status without prop drilling or Context.

// Returns information like whether the form submission is pending, form data, HTTP method, and the action function.

// Useful for disabling buttons or showing spinners during submission in design systems.

import React from "react";
import { useFormStatus } from "react-dom";

function ContactForm() {
  const { pending } = useFormStatus(); // Get form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, the form submission would be handled here asynchronously
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

// export default ContactForm;
// useFormStatus provides the current pending (submission in progress) state of the parent form.

// The submit button is disabled during submission by checking the pending flag.

// This hook simplifies handling form-wide status without needing prop drilling or context. 
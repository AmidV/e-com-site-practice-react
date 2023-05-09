import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

let defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetDefaultFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match...");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      // reset default user form
      resetDefaultFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create a user, email already in use.");
      } else if (error.code === "auth/weak-password") {
        alert("Too short password, need to be at least 6 caracters.");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign up with email and pass</h1>
      <form onSubmit={formHandler}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChanges}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChanges}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChanges}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChanges}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

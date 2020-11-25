import React from "react";
import { AuthService } from "../../services/AuthService";

const Register = ({ setShowSignIn }) => {
  const _auth = new AuthService();

  return (
    <div>
      <h1>Register</h1>
      <button
        className="bg-green-500"
        onClick={async () =>
          await _auth.signUp("RyanTest", "Lastname", "ryantest1", "password123")
        }
      >
        Register
      </button>
      <button className="bg-red-900" onClick={() => setShowSignIn(true)}>
        Already have an account?
      </button>
    </div>
  );
};

export default Register;

import React from "react";
import { AuthService } from "../../services/AuthService";

const Login = ({ setShowSignIn, setIsAuth, setCheckingUser, setIsLoading }) => {
  const _auth = new AuthService();
  const onSignIn = async () => {
    try {
      setIsLoading(true);
      await _auth.signIn("ryan666", "ryan666");
      setIsLoading(false);
      setCheckingUser(true);
      setIsAuth(true);
    } catch (error) {
      setIsAuth(false);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <button className="bg-green-500" onClick={onSignIn}>
        Login
      </button>
      <button className="bg-red-900" onClick={() => setShowSignIn(false)}>
        Create account
      </button>
    </div>
  );
};

export default Login;

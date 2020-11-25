import React from "react";
import { AuthService } from "../../services/AuthService";

const Home = ({ setIsAuth, setCheckingUser }) => {
  const _auth = new AuthService();

  const onSignOut = () => {
    _auth.signOut();
    setCheckingUser(true);
    setIsAuth(false);
  };

  return (
    <div>
      <button className="bg-green-900" onClick={onSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Home;

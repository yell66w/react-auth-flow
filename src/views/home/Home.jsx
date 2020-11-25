import React from "react";
import { useToasts } from "react-toast-notifications";
import { AuthService } from "../../services/AuthService";

const Home = ({ setIsAuth, setCheckingUser }) => {
  const _auth = new AuthService();
  const { addToast } = useToasts();

  const onSignOut = () => {
    _auth.signOut();
    setCheckingUser(true);
    setIsAuth(false);
    addToast("Logged Out Succesfully", {
      appearance: "success",
      autoDismiss: true,
    });
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

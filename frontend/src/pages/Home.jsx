import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Home = ({ user }) => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Welcome, {user.displayName || user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

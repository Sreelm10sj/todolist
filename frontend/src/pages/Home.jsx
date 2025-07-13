import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={() => navigate("/todo")}>Go to Todo List</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

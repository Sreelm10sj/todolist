import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider  } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }};

const handleSignupRedirect = () => {
  navigate("/signup");
};

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Log In</button>
      <button onClick={signInWithGoogle}>Continue with Google</button>
    </form>
      <button onClick={handleSignupRedirect}>Sign Up</button>
    </>
  );
}

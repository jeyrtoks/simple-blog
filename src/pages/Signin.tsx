import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { signInUser } from "../services/Auth";
import { supabase } from "../supabaseClient";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setError("Please add an email!");
      setLoading(false);
      return null;
    } else if (!password) {
      setError("Please add a password!");
      setLoading(false);
      return null;
    }

    try {
      const result = await signInUser(email, password);
      if (result.error) {
        setError(`${result.error.message}`);
      }

      if (result.success) {
        navigate("/");
      }
    } catch (err) {
      console.log("Error signing up:", err);
      setError(`${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form className="card" method="POST" onSubmit={handleSignIn}>
          <h2 style={{ textAlign: "center" }}>Log in</h2>
          <input
            name="email"
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#ef4444",
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            Sign in
          </button>
        </form>
      </div>
      <p>
        Dont have an account? <Link to="/signup">Sign up!</Link>
        <br />
        Or go back to <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default Signin;

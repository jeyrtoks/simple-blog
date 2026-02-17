import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpNewUser } from "../services/Auth";

const Signup = () => {
  document.title = "Signup";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setretypePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let validationError = "";
    if (!username) {
      validationError = "Please add a username!";
    } else if (!email) {
      validationError = "Please add an email!";
    } else if (!password) {
      validationError = "Please add a password!";
    } else if (password != retypepassword) {
      validationError = "Password do not match!";
    }

    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/");
      }
    } catch (err) {
      console.log("Error signing up:", err);
      setError("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="card" method="POST">
        <h2 style={{ textAlign: "center" }}>Create an Account</h2>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
          type="text"
          placeholder="Username..."
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="Email..."
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="Password..."
        />
        <input
          onChange={(e) => {
            setretypePassword(e.target.value);
          }}
          name="retypepassword"
          type="password"
          placeholder="Retype Password..."
        />
        <div>
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
        </div>

        <button onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign in!</Link>
      </p>
    </>
  );
};

export default Signup;

import { Form, Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div>
        <Form className="card">
          <h2 style={{ textAlign: "center" }}>Log in</h2>
          <input name="username" type="text" placeholder="Username..." />
          <input name="email" type="text" placeholder="Email..." />
          <input name="password" type="password" placeholder="Password..." />

          <button type="submit">Sign in</button>
        </Form>
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

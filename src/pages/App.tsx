import header from "../components/header";
import "../App.css";
import { getUser, signOutUser } from "../services/Auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  document.title = "Home";
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getuser = async () => {
      const useremail = await getUser();
      setUserEmail(useremail || "");
    };
    getuser();
  }, []);

  return (
    <>
      <header>{header()}</header>
      <div>
        <h1>Welcome to the Simple Blog App! {userEmail}</h1>
        <p>This is the home page. Use the navigation to sign in or sign up.</p>
      </div>
      <div>
        <Link to={"/"}>
          <button onClick={signOutUser}>Log-out</button>
        </Link>
      </div>
    </>
  );
};

export default App;

import Header from "../components/Header";
import "../App.css";
import { getUser, signOutUser } from "../services/Auth";
import { useEffect, useState } from "react";

const App = () => {
  document.title = "Home";
  const [userEmail, setUserEmail] = useState<string | null>();

  useEffect(() => {
    const getuser = async () => {
      const useremail = await getUser();
      setUserEmail(useremail || null);
    };
    getuser();
  }, []);

  const handleSignOut = async () => {
    await signOutUser();
    setUserEmail(null);
  };

  return (
    <>
      <Header user={userEmail} />
      <div>
        <h1>Welcome to the Simple Blog App! {userEmail}</h1>
        <p>This is the home page. Use the navigation to sign in or sign up.</p>
      </div>
      {userEmail && (
        <div>
          <button onClick={handleSignOut}>Log-out</button>
        </div>
      )}
    </>
  );
};

export default App;

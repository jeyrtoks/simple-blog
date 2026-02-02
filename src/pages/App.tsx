import header from "../components/header";
import "../App.css";

const App = () => {
  document.title = "Home";
  return (
    <>
      <header>{header()}</header>
      <div>
        <h1>Welcome to the Simple Blog App!</h1>
        <p>This is the home page. Use the navigation to sign in or sign up.</p>
      </div>
    </>
  );
};

export default App;

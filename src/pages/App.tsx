import Header from "../components/Header";
import "../App.css";

const App = () => {
  document.title = "Home";

  return (
    <>
      <Header />
      <div>
        <h1>Welcome to the Simple Blog App!</h1>
        <p>This is the home page. Use the navigation to sign in or sign up.</p>
      </div>
    </>
  );
};

export default App;

import { Link } from "react-router-dom";
import "../App.css";

type HeaderProps = {
  user?: string | null;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "1px solid #5e5e5e",
      }}
    >
      <p>Simple Blog!</p>
      <h2>Hello, Welcome to My Blog!</h2>
      {user ? (
        <button title="Create post">Create</button>
      ) : (
        <Link to="/signin">
          <button title="Signin">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;

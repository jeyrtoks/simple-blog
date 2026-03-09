import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import type { RootState } from "../state/Store";
import { signOutUser } from "../services/Auth";

const Header = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #5e5e5e",
      }}
    >
      {user.username ? <p>@{user.username}</p> : <p>Simple Blog!</p>}
      <h2>Hello, Welcome to My Blog!</h2>
      {user.email ? (
        <div>
          <button title="Create post">Create</button>
          <button onClick={async () => await signOutUser()}>Log-out</button>
        </div>
      ) : (
        <Link to="/signin">
          <button title="Signin">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;

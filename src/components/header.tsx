import { Link } from "react-router-dom";
import "../App.css";

const header = () => {
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
      <Link to="/signup">
        <button title="Create post" style={{}}>
          Create
        </button>
      </Link>
    </div>
  );
};

export default header;

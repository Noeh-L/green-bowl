import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Navbar({ username }) {
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default Navbar;

import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

function OrderPage() {
  // STATE
  const { username } = useParams();

  // COMPORTEMENT

  // RENDER
  return (
    <div>
      <Navbar />
      <Main />
      <h1>Bonjour {username}</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;

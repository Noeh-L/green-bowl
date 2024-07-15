import { Link, useParams } from "react-router-dom";

function OrderPage() {
  // STATE
  const { username } = useParams();

  // COMPORTEMENT

  // RENDER
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;

import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <div>
      <h1>Bonjour</h1>
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;

import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  // STATE
  const [inputValue, setInputValue] = useState("");

  // BEHAVIOR
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  // RENDER
  return (
    <form action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        value={inputValue}
        required
      />
      <Link to={"/order"}>
        <button>Accédez à votre espace</button>
      </Link>
    </form>
  );
}

export default LoginForm;

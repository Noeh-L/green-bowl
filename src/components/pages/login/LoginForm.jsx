import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // STATE
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // BEHAVIOR
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  // RENDER
  return (
    <form action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        value={inputValue}
        required
      />
      <button>Accéder à mon espace</button>
    </form>
  );
}

export default LoginForm;

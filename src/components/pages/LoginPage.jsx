import { useState } from "react"

function LoginPage() {
    // STATE
    const [inputValue, setInputValue] = useState("")

    // BEHAVIOR
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${inputValue}`)
        setInputValue('')
    }

    // RENDER
    return (
        <>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Entrez votre prénom..." onChange={handleChange} value={inputValue} required />
                <button>Accédez à votre espace</button>
            </form>
        </>
    )
}

export default LoginPage;
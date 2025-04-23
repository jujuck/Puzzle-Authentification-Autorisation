import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import "./App.css";

type SignupType = {
  email: string;
  password: string;
  confirmed: string;
};

const initialSignUp = {
  email: "",
  password: "",
  confirmed: "",
};

function App() {
  const [signup, setSignup] = useState<SignupType>(initialSignUp);
  const [error, setError] = useState<string | undefined>();
  // Some code here

  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmed" && value !== signup.password) {
      setError("mots de passe différents");
    } else if (name === "confirmed") {
      setError(undefined);
    }
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const signUpSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Some code here
    } catch {
      toast.error("Erreur lors de la création de compte");
    }
  };

  return (
    <main className="container">
      <h1 className="text-center m-5">Bienvenu sur notre app</h1>
      <form onSubmit={signUpSubmission} className="border m-2 p-3">
        <h3 className="text-center m-3">Enregistrez vous pour continuer</h3>
        <div className="form-group">
          <label aria-label="email" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="form-control"
            value={signup.email}
            name="email"
            onChange={handleSignup}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
          />
        </div>
        <div className="form-group">
          <label aria-label="password" htmlFor="password">
            Mot de passe
          </label>
          <input
            id="password"
            className="form-control"
            type="password"
            required
            minLength={8}
            name="password"
            onChange={handleSignup}
            value={signup.password}
          />
        </div>
        <div className="form-group">
          <label aria-label="confirmed password" htmlFor="confirmed">
            Confirmation
          </label>
          <input
            id="confirmed"
            type="password"
            className="form-control"
            required
            minLength={8}
            name="confirmed"
            onChange={handleSignup}
            value={signup.confirmed}
          />
          {error && <p>{error}</p>}
        </div>
        <button type="submit" className="btn btn-success">
          S'inscrire
        </button>
      </form>
      <Link to="login">
        <small>Déjà un compte</small>
      </Link>
    </main>
  );
}

export default App;

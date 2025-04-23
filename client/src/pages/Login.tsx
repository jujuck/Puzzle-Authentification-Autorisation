import { useState } from "react";
import { toast } from "react-toastify";
// Some code here

type LoginType = {
  email: string;
  password: string;
};

const initialLogin = {
  email: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState<LoginType>(initialLogin);
  // Some code here

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const signUpSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Some Code here
    } catch {
      toast.error("Identifiants incorrects");
    }
  };

  return (
    <main className="container">
      <h1 className="text-center m-5">Bienvenu sur notre app</h1>
      <form onSubmit={signUpSubmission} className="border m-2 p-3">
        <h3 className="text-center m-3">Connectez vous pour continuer</h3>
        <div className="form-group">
          <label aria-label="email" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="form-control"
            value={login.email}
            name="email"
            onChange={handleLogin}
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
            onChange={handleLogin}
            value={login.password}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Se connecter
        </button>
      </form>
    </main>
  );
}

export default Login;

import { Navigate } from "react-router";
import { useAuth } from "../../contexts/Auth";

function Protected() {
  const { user } = useAuth();

  console.log(user);
  // Some code here
  return <Navigate to="/" replace />;
}

export default Protected;

import { Link, Navigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import "ui/src/index.css";
import { useAuth } from "../components/Auth/AuthProvider";

export const Landing = () => {
  // State global para saber si está autenticado
  const auth = useAuth();

  // Si el usuario está autenticado se redirige al dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/home"/>;
  }

  return (
    <div className="flex flex-col text-center items-center justify-center">
      <Typography variant="h1" className="title">
        Bienvenido a ToolCare
      </Typography>
      <Link to="/login"> 
        <Button>
          Login 
        </Button>
      </Link>
    </div>
  );
}
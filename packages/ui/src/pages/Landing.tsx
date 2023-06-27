import { Link, Navigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import "ui/src/index.css";
import { useAuth } from "../components/Auth/AuthProvider";

export const Landing = () => {
  // State global para saber si está autenticado
  const auth = useAuth();

  // Si el usuario está autenticado se redirige al dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col text-center items-center justify-center gap-8">
      <Typography variant="h1" className="title">
        Bienvenido a ToolCare
      </Typography>
      <Typography variant="h4" className="subtitle">
        ¿Qué tipo de usuario eres?
      </Typography>

      <div className="container flex flex-col gap-4">
        <Link to="/login">
          <Button color="orange" className="w-40">Gerente</Button>
        </Link>
        <Link to="/login">
          <Button color="orange" className="w-40">Operario</Button>
        </Link>
        <Link to="/login">
          <Button color="orange" className="w-40">Administrador</Button>
        </Link>
      </div>
    </div>
  );
};

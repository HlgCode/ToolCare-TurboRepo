import * as React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export const Login = () => {
  // State global para saber si está autenticado}
  const auth = useAuth();

  const navigate = useNavigate();
  
  // Si el usuario está autenticado se redirige al dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/login/home"/>;
  }

  // State con los datos del usuario
  const [ credentials, saveCredentials ] = useState({});

  // Almacenar lo que el usuario escriba en el state
  const handleInputChange = (e: any) => {
    saveCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Autenticar usuario
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const responseJSON = await response.json();

      if(!response.ok) {
        console.log(responseJSON.error);
      } else {
        console.log(responseJSON);
        auth.isAuthenticated = true;
        navigate("/login/home");
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Card className="flex items-center" shadow={false}>
      <img
        src="public/Logo.png"
        alt="ToolCare Logo"
      />
      <form onSubmit={handleSubmit} className="mt-16 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-12">
          <Input 
            className="bg-white" 
            name="email" 
            size="lg" 
            type="email" 
            label="Email" 
            onChange={handleInputChange} 
            required
          />
          <Input 
            className="bg-white" 
            name="password" 
            type="password" 
            size="lg" 
            label="Contraseña"
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" className="mt-6 w-1/2 text-black border-black bg-pastel-orange">
          Entrar
        </Button>
      </form>
    </Card>
  );
};
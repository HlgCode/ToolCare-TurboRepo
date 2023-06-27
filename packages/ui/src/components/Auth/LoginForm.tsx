import * as React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { API_URL } from "../../config/config";
import { 
  AuthResponse,
  AuthResponseError, 
} from "../../types/types";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export const LoginForm = () => {
  
  // State con los datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  
  // State global para saber si está autenticado}
  const auth = useAuth();
  
  // Si el usuario está autenticado se redirige al dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/home"/>;
  }
  
  // Hook para redirigir
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Autenticar usuario
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, }),
      });

      if(!response.ok) {
        console.log("Error");
        const responseJSON = (await response.json()) as AuthResponseError;
        setErrorResponse(responseJSON.error);
        return;
      } else {
        console.log("Login successful");
        setErrorResponse("");
        const responseJSON = (await response.json()) as AuthResponse;

        if (responseJSON.token) {
          auth.saveUser(responseJSON);
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Card className="flex items-center justify-center" shadow={false}>
      <img
        src="public/Logo.png"
        alt="ToolCare Logo"
      />
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-16 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-12 min-w-full">
          <Input 
            className="bg-white" 
            name="email" 
            size="lg" 
            type="email" 
            label="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <Input 
            className="bg-white" 
            name="password" 
            type="password" 
            size="lg" 
            label="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="mt-6 w-1/2 text-black border-black bg-pastel-orange">
          Entrar
        </Button>
        {!!errorResponse && <p>{errorResponse}</p>}
      </form>
    </Card>
  );
};

// return (
//   <Card color="transparent" shadow={false}>
//     <Typography variant="h4" color="blue-gray">
//       Sign Up
//     </Typography>
//     <Typography color="gray" className="mt-1 font-normal">
//       Enter your details to register.
//     </Typography>
//     <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//       <div className="mb-4 flex flex-col gap-6">
//         <Input size="lg" label="Name" />
//         <Input size="lg" label="Email" />
//         <Input type="password" size="lg" label="Password" />
//       </div>
//       <Checkbox
//         label={
//           <Typography
//             variant="small"
//             color="gray"
//             className="flex items-center font-normal"
//           >
//             I agree the
//             <a
//               href="#"
//               className="font-medium transition-colors hover:text-blue-500"
//             >
//               &nbsp;Terms and Conditions
//             </a>
//           </Typography>
//         }
//         containerProps={{ className: "-ml-2.5" }}
//       />
//       <Button className="mt-6" fullWidth>
//         Register
//       </Button>
//       <Typography color="gray" className="mt-4 text-center font-normal">
//         Already have an account?{" "}
//         <a
//           href="#"
//           className="font-medium text-blue-500 transition-colors hover:text-blue-700"
//         >
//           Sign In
//         </a>
//       </Typography>
//     </form>
//   </Card>
// );
// };

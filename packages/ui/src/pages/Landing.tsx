import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import "ui/src/index.css";

export const Landing = () => {
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
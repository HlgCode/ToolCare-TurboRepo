import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export const LoginForm = () => {

  interface User {
    email: string;
    password: string;
  }
  const [user, setUser] = useState<User>({email:"", password:""});
  const handlerInput = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const resJSON = await res.json();

    if (!res.ok) {
      console.log(resJSON.error);
    } else {
      console.log(resJSON);
      return <Navigate to={"dashboard"} />;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <img src="public/Logo.png" alt="Logo" />
      </div>
      <Card color="transparent" shadow={false}>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handlerSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              onChange={handlerInput}
              name="email"
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={handlerInput}
              name="password"
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            {" "}
            <Navigate to="/dashboard" />
            Login
          </Button>
        </form>
      </Card>
    </>
  );
};

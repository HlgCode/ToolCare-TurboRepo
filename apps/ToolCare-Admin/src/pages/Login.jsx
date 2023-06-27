import React, { useState, useEffect } from "react";

import { LoginForm, Loader } from "ui";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <div className="">
        {isLoading ? (
          <div className="container bg-white flex justify-center items-center flex-col p-8 ">
            <Loader />
          </div>
        ) : (
          <div className="container flex flex-col">
            <LoginForm />
          </div>
        )}
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";

import { LoginForm, Loader } from "ui/src";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          <LoginForm />
        </div>
      )}
    </div>
  );
};
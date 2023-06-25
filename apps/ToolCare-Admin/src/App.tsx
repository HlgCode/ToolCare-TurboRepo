/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

import "../../../packages/ui/src/App.css";
import {
  DrawerWithNav,
  UserTable,
  CounterButton,
  Login,
  NewTabLink,
  Sidebar,
  Spinner,
} from "ui";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <Spinner /> // Muestra el spinner mientras se carga la aplicación
      ) : (
        <>
          <div className="container">
            {/* <div
              className="App container"
              style={{
                backgroundColor: "pink", // Reemplaza con el color de fondo deseado
              }}
            /> */}
            {/* Contenido principal de tu aplicación */}
            {/* <DrawerWithNav /> */}
            {/* <UserTable /> */}
            {/* <CounterButton /> */}
            {/* <NewTabLink /> */}
            {/* <Sidebar /> */}
            <Login />
            {/* <h1 className="title">
              Bienvenido a <span>ToolCare</span>
            </h1>
          </div>
          <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

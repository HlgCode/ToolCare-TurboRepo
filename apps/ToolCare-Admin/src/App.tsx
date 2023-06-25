/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

import "../../../packages/ui/src/App.css";

import {
  DrawerWithNav,
  UserTable,
  // CounterButton,
  Login,
  // NewTabLink,
  // Sidebar,
  // MaintenanceTable,
  // DialogWithForm,
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
    <>
      <div className="App">
        <div className="container">
          {/* <Sidebar/> */}
          {/*<DrawerWithNav/>*/}
          {/* <UserTable/> */}
          {/* <CounterButton/> */}
          <Login />
          {/*<MaintenanceTable />*/}
          {/*<DialogWithForm/>*/}
        </div>
      </div>
    </>
  );
}

export default App;

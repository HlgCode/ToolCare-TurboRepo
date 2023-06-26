/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
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

import * as React from "react";
require("../../../../packages/ui/src/App.css");
import { Sidebar, UserTable } from "ui";
import "../../../packages/ui/src/index.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container ">
          {/* <Sidebar/> */}
          {/* <DrawerWithNav/> */}
          <UserTable />
          {/* <CounterButton/> */}
          {/* <Login/> */}
        </div>
      </div>
    </>
  );
}

export default App;

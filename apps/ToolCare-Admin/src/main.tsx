import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import "../../../packages/ui/src/index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { 
  Login,
  ProtectedRoute, 
  AuthProvider, 
} from "ui/src/index";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>asdasdasd</div>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/login",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/login/home",
        element: <Home/>
      }
    ],
  }
]);

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider>
       <AuthProvider>
         <RouterProvider router={router} />
       </AuthProvider>
     </ThemeProvider>
   </React.StrictMode>
);
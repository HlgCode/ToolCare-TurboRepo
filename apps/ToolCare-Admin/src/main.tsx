import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../../../packages/ui/src/index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { 
  Login,
  Home,
  Landing,
} from "ui/src/pages";

import {
  ProtectedRoute,
  AuthProvider,
} from "ui/src";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider>
       <AuthProvider>
         <RouterProvider router={router} />
       </AuthProvider>
     </ThemeProvider>
   </React.StrictMode>
);

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
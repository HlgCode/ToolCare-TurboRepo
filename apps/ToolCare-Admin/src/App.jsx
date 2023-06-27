import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Login, Dashboard, Admin } from "./pages";

import { Users } from "./modules";
import { Auth } from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ id: 1, username: "admin" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="container  bg-amber-500">
      <BrowserRouter>
        <nav>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          {/* rutas protegidas de usuarios */}
          <Route element={<Auth user={user} />}>
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="users" element={<Users />} />
            </Route>
          </Route>

          {/* rutas protegidas de administradores */}
          <Route element={<Auth /*user={user}*/ />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Navegacion /> */
}

// function Navegacion() {
//   return (
//     // <nav>
//     //   <ul>
//     //     <li>
//     //       <Link to="/">Landing</Link>
//     //     </li>
//     //     <li>
//     //       <Link to="/login">Login</Link>
//     //     </li>
//     //     <li>
//     //       <Link to="/dashboard">Dashboard</Link>
//     //     </li>
//     //     <li>
//     //       <Link to="/admin">Admin</Link>
//     //     </li>
//     //   </ul>
//     // </nav>
//   );
// }

export default App;

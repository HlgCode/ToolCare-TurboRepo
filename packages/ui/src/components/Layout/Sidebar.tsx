import * as React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    Bars3Icon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    HomeIcon,
    HomeModernIcon,
    CalendarIcon,
    TruckIcon,
    TicketIcon,
    BugAntIcon, 
    ArrowLeftOnRectangleIcon
  } from "@heroicons/react/24/solid";
import { useAuth } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
   
  export const Sidebar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    
    function handleSignOut (e: React.MouseEvent<HTMLAnchorElement>) {
      e.preventDefault();
      auth.signOut();
      navigate("/");
    }
    
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] shadow-none rounded-l-4rem">
        <div className="mb-2 p-4 text-center">
          <Typography variant="p" color="blue-gray">
            {localStorage.getItem("username")}
          </Typography>
          <Typography variant="p">
            {localStorage.getItem("email")}
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Usuarios
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <HomeModernIcon className="h-5 w-5" />
            </ListItemPrefix>
            Sedes
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CalendarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Cronogramas
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <TruckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Proveedores
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <TicketIcon className="h-5 w-5" />
            </ListItemPrefix>
            Ordenes
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Informes
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BugAntIcon className="h-5 w-5" />
            </ListItemPrefix>
            Reportes
          </ListItem>
          <Link to="#" onClick={handleSignOut}>
            <ListItem>
              <ListItemPrefix>
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Cerrar sesión 
            </ListItem>
          </Link>
        </List>
      </Card>
    );
  }
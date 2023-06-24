import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Dialog,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";

const TABLE_HEAD = ["Id Card", "Nombre de usuario", "Nombre completo", "Rol", "Email", "Fecha de nac.", "Acciones"];


export const UserTable = () => {
  
  const [data, saveData] = useState([]);
  const [open, setOpen ] = useState(false);
  
  const consultarUsarios = async () => {
    const response = await fetch("http://localhost:4000/api/users");
    const responseJSON = await response.json();
    saveData(responseJSON);
  }

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect( () => {
    consultarUsarios();
  }, [] );

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-5"> {/* Header y botones */}
          <div> {/* Header */}
            <Typography variant="h5" color="blue-gray">
              Usuarios
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Gestionar informacion de los usuarios
            </Typography>
          </div>
          <div className="flex shrink-0 flex-row gap-2"> {/* Botones */}
            <Button variant="outlined" color="blue-gray" size="sm">
              Ver todos
            </Button>
            <Button onClick={handleOpen} className="flex items-center gap-3" color="blue" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Registrar usuario
            </Button>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <Input label="Buscar" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ idCard, username, fullName, email, birthDate, Role: {name} }, index) => {
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={idCard}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {idCard}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {username}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {fullName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name} {/* Nombre del Rol */}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {birthDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="flex flex-row gap-5">
                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                      <PencilIcon className="h-5 w-5"/>
                    </Typography>
                    <Typography as="a" href="#" variant="small" color="red" className="font-medium">
                      <TrashIcon className="h-5 w-5"/>
                    </Typography>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Pagina 1 de 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Anterior
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Siguiente
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, UserPlusIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { API_URL } from "../../config/config";

const TABLE_HEAD = [
  "Nombre completo",
  "Id Card",
  "Rol",
  "Email",
  "Sede",
  "Acciones",
];

export const UserTable = () => {
  const [data, saveData] = useState([]);
  const [open, setOpen] = useState(false);

  const consultarUsarios = async () => {
    const response = await fetch(`${API_URL}/users`);
    const responseJSON = await response.json();
    saveData(responseJSON);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    consultarUsarios();
  }, []);

  return (
      <Card className="w-full h-full m-0 rounded-none rounded-r-4rem">
        <CardHeader floated={false} shadow={false} className="rounded-r-4rem">
          <div className="flex flex-col md:flex-row items-center justify-around gap-50">
            <div>
              <Typography variant="h5" color="blue-gray">
                Usuarios
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Gestionar informacion de los usuarios
              </Typography>
            </div>
            <div className="flex shrink-0 flex-row gap-2">
              <Button variant="outlined" color="blue-gray" size="sm">
                Ver todos
              </Button>
              <Button
                onClick={handleOpen}
                className="flex items-center gap-3"
                color="blue"
                size="sm"
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Registrar
                usuario
              </Button>
            </div>
          </div>
          <div className="">
            <div className="w-full">
              <Input
                label="Buscar"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0 overflow-scroll m-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
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
              {data.map(
                (
                  {
                    idCard,
                    fullName,
                    email,
                    Role: { name },
                  },
                  index
                ) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={idCard}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex flex-row gap-4"
                          >
                          <UserCircleIcon className="h-5 w-5"/>
                          {fullName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {idCard}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name} {/* Nombre del Rol */}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Not Available
                        </Typography>
                      </td>
                      
                      <td className={classes}>
                        <div className="flex flex-row gap-5">
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue"
                            className="font-medium"
                          >
                            <PencilSquareIcon className="h-5 w-5" />
                          </Typography>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="red"
                            className="font-medium"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
  );
};

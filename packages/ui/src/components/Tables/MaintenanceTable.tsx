import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
  Dialog,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import React from "react";
//import DialogWithForm from "ui";
//const maintenance = require( "../../../../apps/ToolCare-API/controllers/maintenance.controller.js");

const TABS = [
  {
    label: "Todos",
    value: "Todos",
  },
  {
    label: "Finalizado",
    value: "Finalizado",
  },
  {
    label: "Espera",
    value: "Espera",
  },
];

const TABLE_HEAD = [
  "Id",
  "Titulo",
  "Cronograma",
  "Herramienta",
  "Tipo",
  "Orden de compra",
  "Frecuencia",
  "Calibración",
  "Encargado",
  "Estado",
  "",
];

/* Consuminedo la Api */
const api = "http://localhost:4000/api";

export const MaintenanceTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(api + "/maintenances");
    const responseJSON = await response.json();
    setData(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Card className="h-full w-full ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Manteniminetos
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Ver información sobre todos los manteniminetos
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <React.Fragment>
              <Button
                className="flex items-center gap-3 text-black border-black bg-pastel-orange"
                size="sm"
                onClick={handleOpen}
              >
                {" "}
                + Añadir
              </Button>
              <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-28 place-items-center  bg-pastel-orange "
                  >
                    <Typography variant="h3" color="white">
                      Añadir mantenimiento
                    </Typography>
                  </CardHeader>
                  <CardBody className="flex flex-col gap-1">
                    <Input label="Titulo" size="lg" color="orange" />
                    <Input label="Cronograma" size="lg" color="orange" />
                    <Input label="Fecha" size="lg" color="orange" />
                    <Input label="Herramineta" size="lg" color="orange" />
                    <Input label="Tipo" size="lg" color="orange" />
                    <Input label="Frecuencia" size="lg" color="orange" />
                    <Input label="Calibración" size="lg" color="orange" />
                    <Input label="Encargado" size="lg" color="orange" />
                    <Input label="Estado" size="lg" color="orange" />
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      type="submit"
                      className="text-black border-black bg-pastel-orange"
                      color="orange"
                      variant="gradient"
                      onClick={handleOpen}
                      fullWidth
                    >
                      Añadir
                    </Button>
                  </CardFooter>
                </Card>
              </Dialog>
            </React.Fragment>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              (
                {
                  id,
                  title,
                  scheduleId,
                  maintenanceDate,
                  toolId,
                  frecuency,
                  requiereCalibration,
                  supplierEmployeeId,
                  status,
                },
                index
              ) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {id}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {scheduleId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {toolId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {frecuency}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {maintenanceDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {frecuency}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={requiereCalibration ? "Si" : "Si"}
                          color={requiereCalibration ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {supplierEmployeeId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status ? "Finalizado" : "En espera"}
                          color={status ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
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

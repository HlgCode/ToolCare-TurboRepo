import { Spinner } from "@material-tailwind/react";

export const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="public/Logo.png" alt="Logo" />

        <br />
        <br />

        <Spinner className="h-16 w-16 text-dark" color="orange"/>
      </div>
    </>
  );
};

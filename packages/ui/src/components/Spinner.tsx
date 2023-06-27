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

// import React from "react";
// import "../App.css"; // Importa los estilos del spinner

// export const spinner = () => {
//   return (
//     <>
//       <div className="loader-container flex flex-col ">

//           <img
//             src="public/Logo.png"
//             alt="Logo"
//           />
//         <br />
//         <br />
//         <div className="loader"></div>
//         <br />
//         <h3> <span>Loading...</span> </h3>

//       </div>
//     </>
//   );
// };
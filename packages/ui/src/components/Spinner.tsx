import React from "react";
import "../App.css"; // Importa los estilos del spinner

export const Spinner = () => {
  return (
    <>
      <div className="loader-container flex flex-col ">
        
          <img
            src="https://snz04pap002files.storage.live.com/y4mMjaLNnPm0hdk3CLOEvU6V3lSCuugamMelMjRHn5fsjftlYKeerEyO98hYwvAwJld4DfJrcLo1bFXm32AS1_GERl7BSn1CMtmWi-LNnrz_awwJqlh2hWvW8jvh6KPhyNr5XWfktL9Mw3ppkhVZg3qzfgK5dGWgRV7ZX6oLBzY4_UCeS5nDCO6-aa875hVamCXWlfYylucSoEkwbCbUvZQGPhH86vazuAplN7RUErPbvQ?encodeFailures=1&width=282&height=152"
            alt="Logo"
          />
        <br />
        <br />
        <div className="loader"></div>
        <br />
        <h3> <span>Loading...</span> </h3>
        
      </div>
    </>
  );
};

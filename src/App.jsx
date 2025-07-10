import React from "react";
import Routings from "../utils/Routings";
 const apiUrl = import.meta.env.VITE_BACKEND_URL;



console.log("API URL:", apiUrl); // http://localhost:5000

//testing
const App = () => {
  return (
    <div>
      <Routings />
    </div>
  );
};

export default App;

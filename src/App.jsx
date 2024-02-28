import { useState } from "react";

import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Signup />
    </>
  );
}

export default App;

import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/customers/");
      setData(response.data);

      // console.log(data);

      const usernameFiltered = data.filter(
        (data) => data.username === username
      );

      console.log(usernameFiltered);

      const uName = usernameFiltered.map((data) => username)[0];
      const uPass = usernameFiltered.map((data) => data.password)[0];

      console.log(uName, uPass);

      if (username === uName && password === uPass) {
        // Login successful, you may redirect or set authentication state here
        console.log("Login successful");
      } else {
        // Handle authentication error
        // setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

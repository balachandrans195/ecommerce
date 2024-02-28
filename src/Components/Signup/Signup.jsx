// SignUpForm.jsx
import axios from "axios";
import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    address: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/customers/",
        formData
      );

      console.log(response);

      if (response.ok) {
        console.log("User registered successfully!");
        // Redirect or perform any other action after successful signup
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </label>

      <label>
        Date of Birth:
        <input
          type="text"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

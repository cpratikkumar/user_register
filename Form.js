import React, { useState } from "react";
import "../styles/Form.css";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    re_password: "",
  });
  // getting the form data
  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  // submit the form  data

  const submitHandler = (e) => {
    e.preventDefault();

    if (user.name.length < 3) {
      toast.error("Name length is too short...");
    } else if (user.name.length > 20) {
      toast.error("Name length is too high...");
    } else if (user.email.length < 3) {
      toast.error("email length is too short ");
    } else if (!user.email.includes("@", ".com")) {
      toast.error("P;ease provide a valid email...");
    } else if (user.phone.length < 10 || user.phone.length > 10) {
      toast.error("Please enter a valid phone number...");
    } else if (user.password !== user.re_password) {
      toast.error("Password doesn't  match...");
    } else {
      toast.success("Successfully register...");
    }
  };
  return (
    <div className="form_body">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          id="name"
          onChange={changeHandler}
          autoComplete="off"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          id="name"
          onChange={changeHandler}
          autoComplete="off"
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          value={user.phone}
          id="name"
          onChange={changeHandler}
          autoComplete="off"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          id="name"
          onChange={changeHandler}
          autoComplete="off"
        />
        <span className="password"></span>

        <label htmlFor="re_password">Re-Password</label>
        <input
          type="password"
          name="re_password"
          value={user.re_password}
          id="name"
          onChange={changeHandler}
          autoComplete="off"
        />
        <span className="re_password"></span>

        <button type="submit">Submit</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Form;

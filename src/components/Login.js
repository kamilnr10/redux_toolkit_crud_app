import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "pedro", age: 22, email: "pedro@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;

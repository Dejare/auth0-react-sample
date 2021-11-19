import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './componentStyle.css'

const LoginButton = ({btnText, background, color}) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
    style={{
      padding: "1rem 1.5rem", 
      border: "2px solid white",
      background: `${background}`,
      color: `${color}`}}
      onClick={() => loginWithRedirect()}
    >
      {btnText}
    </button>
  );
};

export default LoginButton;

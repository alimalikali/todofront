import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) navigate("/login");
  }, []);

  return <Component />;
};

export default Protected;

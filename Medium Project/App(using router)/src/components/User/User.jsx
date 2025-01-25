import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="text-5xl bg-orange-500 p-5">User:{userid}</div>;
};

export default User;

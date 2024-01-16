import React from "react";
import "./style.css";

const Users = ({ userId, id, title }) => {
  return (
    <div className="users-card">
      <h2>UserId: {userId}</h2>
      <h2>Id: {id}</h2>
      <h2>Title: {title}</h2>
    </div>
  );
};

export default Users;

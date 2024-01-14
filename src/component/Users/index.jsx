import React from "react";
import "./style.css";

const Users = ({ name, email, phone, username, website }) => {
  return (
    <div className="users-card">
      <h2>Name: {name}</h2>
      <h2>
        Phone: <a href={`tel:${phone}`}>{phone}</a>
      </h2>
      <h2>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </h2>
      <h2>
        Website:{" "}
        <a href={`${website}`} target="_blank">
          {website}
        </a>
      </h2>
    </div>
  );
};

export default Users;

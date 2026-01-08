import React from "react";
import users from "../data/users";
import Card from "./Card";
import "./../styles/Userlis.css";



const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <Card key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
          <p>{user.email}</p>
        </Card>
      ))}
    </div>
  );
};

export default UserList;

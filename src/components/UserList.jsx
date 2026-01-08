import users from "../data/users";  
import Card from "./Card";
const UserList = () => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
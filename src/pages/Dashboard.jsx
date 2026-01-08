import React from 'react';
import Card from "../components/Card";
import Counter from '../components/Counter';
import Toggle from '../components/Toggle';
import UserList from '../components/UserList';

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
   
       <Card>
        <h3 >Form </h3>
        
      </Card>

      <Card>
        <h3>Live Preview</h3>
      
      </Card>
        <Card>
         <Counter label="Profile Views" initialCount={10} />
        <Counter label="Likes" initialCount={0} />
         
        </Card>
         <Toggle title="Counter Section">
       <UserList/>
      </Toggle>
      
    </>
  );
};


export default Dashboard;

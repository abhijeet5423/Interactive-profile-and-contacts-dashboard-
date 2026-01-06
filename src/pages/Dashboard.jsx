import React from 'react';
import Card from "../components/Card";
import Counter from '../components/Counter';

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
   
       <Card>
        <h3 >Total Users</h3>
        <p >1200</p>
      </Card>

      <Card>
        <h3>Revenue</h3>
        <p>₹50,000</p>
      </Card>
        <Card>
         <Counter label="Profile Views" initialCount={10} />
        <Counter label="Likes" initialCount={0} />
         
        </Card>
    </>
  );
};


export default Dashboard;

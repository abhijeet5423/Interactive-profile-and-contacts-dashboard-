import React from 'react';
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
   
       <Card>
        <h3 style={{ color: "red" }}>Total Users</h3>
        <p style={{ color: "red" }}>1200</p>
      </Card>

      <Card>
        <h3>Revenue</h3>
        <p>₹50,000</p>
      </Card>
    </>
  );
};


export default Dashboard;

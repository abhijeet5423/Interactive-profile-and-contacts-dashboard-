import React from "react";

import Card from "../components/Card";
import Counter from "../components/Counter";
import Toggle from "../components/Toggle";
import UserList from "../components/UserList";
import ProfileForm from "../forms/ProfileForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Interactive Profile Dashboard</h2>

      {/* Profile Form + Live Preview */}
      <section >
        
  
          <ProfileForm/>
        

      
      </section>

      {/* Counters */}
      <section className="dashboard-counter">
        <Card>
          <Counter label="Profile Views" initialCount={10} />
          <Counter label="Likes" initialCount={0} />
        </Card>
      </section>

      {/* Users List */}
   <section className="dashboard-users">
  <Toggle title="Show Users">
    <div className="users-grid">
      <UserList />
    </div>
  </Toggle>
</section>

      {/* Contact form will come later */}
    </div>
  );
};

export default Dashboard;

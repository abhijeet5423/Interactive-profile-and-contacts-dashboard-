import { useState } from "react";
import Card from "../components/Card";
import "./../styles/ProfileForm.css";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    bio: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
   
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Form */}
       <Card>
      <form style={{ flex: 1 }}>
        <h3>Create Profile</h3>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={profile.role}
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="Bio"
          value={profile.bio}
          onChange={handleChange}
        />
      </form>
</Card>
      {/* Live Preview */}
      <Card>
        <h3>Live Preview</h3>
        <p><b>Name:</b> {profile.name || ""}</p>
        <p><b>Role:</b> {profile.role || ""}</p>
        <p><b>Bio:</b> {profile.bio || ""}</p>
      </Card>
    </div>
  );
};

export default ProfileForm;

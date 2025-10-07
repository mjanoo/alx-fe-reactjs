import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <h3>Profile Details Section</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings Section</h3>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      {/* Navigation for nested routes */}
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;


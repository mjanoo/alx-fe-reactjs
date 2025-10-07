import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link><br />
      <Link to="/profile">Go to Profile</Link><br />
      <Link to="/post/1">Go to Blog Post 1</Link>
    </div>
  );
}

export default Home;

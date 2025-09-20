function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;

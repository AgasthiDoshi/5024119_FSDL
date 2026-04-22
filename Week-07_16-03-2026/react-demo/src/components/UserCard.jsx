// components/UserCard.jsx
// Demonstrates: string props, boolean props, conditional rendering

function UserCard({ name, role, active, avatar }) {
  return (
    <div className={`user-card ${active ? 'user-card--active' : 'user-card--offline'}`}>
      <div className="user-avatar">{avatar}</div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-role">{role}</p>
      </div>
      {/* Conditional rendering using && */}
      <span className={`user-status ${active ? 'status-online' : 'status-offline'}`}>
        {active ? '● Online' : '○ Offline'}
      </span>
    </div>
  );
}

export default UserCard;

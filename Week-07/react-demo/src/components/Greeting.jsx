// components/Greeting.jsx
// Simplest possible component — takes a `name` prop and renders it

function Greeting({ name }) {
  return (
    <div className="greeting-card">
      <span className="greeting-wave">👋</span>
      <p className="greeting-text">Hello, <strong>{name}!</strong></p>
      <span className="greeting-badge">Component</span>
    </div>
  );
}

export default Greeting;

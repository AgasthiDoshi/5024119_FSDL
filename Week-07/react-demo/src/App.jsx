import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Fundamentals</h1>
        <p className="app-sub">Components · Props · State · Forms · Events</p>
      </header>

      <main className="app-main">

        {/* ── 1. COMPONENTS ── */}
        <section className="section">
          <div className="section-label">01 — Components</div>
          <h2>Reusable building blocks</h2>
          <div className="card-row">
            <Greeting name="React" />
            <Greeting name="Codespaces" />
            <Greeting name="World" />
          </div>
        </section>

        {/* ── 2. PROPS ── */}
        <section className="section">
          <div className="section-label">02 — Props</div>
          <h2>Passing data to components</h2>
          <div className="card-row">
            <UserCard name="Priya Sharma"  role="Frontend Dev"  active={true}  avatar="PS" />
            <UserCard name="Raj Mehta"     role="Backend Dev"   active={false} avatar="RM" />
            <UserCard name="Aisha Nair"    role="Full Stack"    active={true}  avatar="AN" />
          </div>
        </section>

        {/* ── 3. STATE ── */}
        <section className="section">
          <div className="section-label">03 — State</div>
          <h2>Dynamic, reactive data</h2>
          <Counter />
        </section>

        {/* ── 4. FORMS & EVENTS ── */}
        <section className="section">
          <div className="section-label">04 — Forms & Events</div>
          <h2>Controlled inputs</h2>
          <SignupForm />
        </section>

      </main>
    </div>
  );
}

export default App;
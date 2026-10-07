import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <h2>🚀 DevOps Demo</h2>
        <span>EC2 Deployment</span>
      </nav>

      <main>
        <div className="hero">
          <p className="tag">AWS • EC2 • REACT</p>

          <h1>
            My First <span>DevOps</span> Deployment
          </h1>

          <p className="description">
            This React application is deployed on an AWS EC2 instance.
          </p>

          <button onClick={() => alert("Application is working! 🚀")}>
            Test Application
          </button>
        </div>

        <div className="cards">
          <div className="card">
            <h3>⚛️ React</h3>
            <p>Frontend application</p>
          </div>

          <div className="card">
            <h3>☁️ AWS EC2</h3>
            <p>Cloud server</p>
          </div>

          <div className="card">
            <h3>🐳 Docker</h3>
            <p>Containerization</p>
          </div>

          <div className="card">
            <h3>🔄 CI/CD</h3>
            <p>Future automation</p>
          </div>
        </div>

        <div className="pipeline">
          <h2>My DevOps Journey</h2>

          <div className="steps">
            <span>💻 Code</span>
            <b>→</b>
            <span>📦 Git</span>
            <b>→</b>
            <span>☁️ GitHub</span>
            <b>→</b>
            <span>🖥️ EC2</span>
            <b>→</b>
            <span>🌐 Deploy</span>
          </div>
        </div>
      </main>

      <footer>
        Built while learning DevOps 🚀
      </footer>
    </div>
  );
}

export default App;
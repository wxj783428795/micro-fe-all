import "./App.css";

function App() {
  const push = (subapp:string) => history.pushState(null, subapp, subapp)
  return (
    <div className="mainapp">
      <header className="mainapp-header">
        <h1>main</h1>
      </header>
      <div className="mainapp-main">
        <ul className="mainapp-sidemenu">
          <li onClick={() => push('/micro1')}>micro1</li>
        </ul>
        <main id="subapp-container"></main>
      </div>
    </div>
  );
}

export default App;

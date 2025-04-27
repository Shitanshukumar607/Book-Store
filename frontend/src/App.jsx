import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <header>
        <h1>Footer</h1>
      </header>
    </>
  );
}

export default App;

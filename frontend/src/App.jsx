import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
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

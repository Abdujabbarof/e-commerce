import { Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Settings />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

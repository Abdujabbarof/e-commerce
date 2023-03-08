import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Detailed from "./pages/Detailed";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detailed />} />
      </Routes>
    </Layout>
  );
}

export default App;

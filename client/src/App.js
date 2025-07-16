import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcApp from "./routes/EcApp";
import MainUnitApp from "./routes/MainUnitApp";
import ResApp from "./routes/ResApp";
import OffApp from "./routes/OffApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainUnitApp />} />
        <Route path="/ec/*" element={<EcApp />} />
        <Route path="/res/*" element={<ResApp />} />
        <Route path="/off/*" element={<OffApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

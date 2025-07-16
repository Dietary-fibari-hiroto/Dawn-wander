import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcApp from "./routes/EcApp";
import MainUnitApp from "./routes/MainUnitApp";
import ResApp from "./routes/ResApp";
import ScrollReset from "./shared/hooks/ScrollReset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainUnitApp />} />
        <Route path="/ec/*" element={<EcApp />} />
        <Route path="/res/*" element={<ResApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

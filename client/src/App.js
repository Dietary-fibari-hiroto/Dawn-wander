import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcApp from "./routes/EcApp";
import MainUnitApp from "./routes/MainUnitApp";
import ResApp from "./routes/ResApp";
import OffApp from "./routes/OffApp";
import Test from "./test/Test";
import UserProvider from "./shared/contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainUnitApp />} />
          <Route path="/ec/*" element={<EcApp />} />
          <Route path="/res/*" element={<ResApp />} />
          <Route path="/off/*" element={<OffApp />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

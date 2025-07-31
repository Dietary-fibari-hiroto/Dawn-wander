import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcApp from "./routes/EcApp";
import MainUnitApp from "./routes/MainUnitApp";
import ResApp from "./routes/ResApp";
import OffApp from "./routes/OffApp";
import AniResApp from "./routes/AniResApp";
import AniEcApp from "./routes/AniEcApp";
import AniOffApp from "./routes/AniOffApp";
import Test from "./test/Test";
import UserProvider from "./shared/contexts/UserContext";
import SurveryProvider from "./shared/contexts/SurveryContext";
import { ResLoading } from "./animationSite/ani_res_patisserie_dawn/pages";
import { EcLoading } from "./animationSite/ani_ec_arewestilla/pages";

function App() {
  return (
    <UserProvider>
      <SurveryProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<MainUnitApp />} />
            <Route path="/ec/*" element={<EcApp />} />
            <Route path="/res/*" element={<ResApp />} />
            <Route path="/off/*" element={<OffApp />} />

            <Route path="/ani/res/loading" element={<ResLoading />} />
            <Route path="/ani/ec/loading" element={<EcLoading />} />

            <Route path="/ani/res/*" element={<AniResApp />} />
            <Route path="/ani/ec/*" element={<AniEcApp />} />
            <Route path="/ani/off/*" element={<AniOffApp />} />

            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </SurveryProvider>
    </UserProvider>
  );
}

export default App;

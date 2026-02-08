import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Information_security_policy from "./pages/compliance/information-security-policy";
import Roles_and_responsibilities from "./pages/compliance/roles-and-responsibilities";
import Business_impact from "./pages/compliance/business-impact";
import It_system_data from "./pages/compliance/it-system-data";
import Sensitive_it_inventory from "./pages/compliance/sensitive-it-inventory";
import Risk_assessment from "./pages/compliance/risk-assessment";
import It_security_audits from "./pages/compliance/it-security-audits";
import Security_control_catalog from "./pages/compliance/security-control-catalog";
import Sec_540 from "./pages/compliance/sec-540";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/compliance/information-security-policy"
          element={<Information_security_policy />}
        />
        <Route
          path="/compliance/roles-and-responsibility"
          element={<Roles_and_responsibilities />}
        />
        <Route
          path="/compliance/business-impact"
          element={<Business_impact/>}
        />
        <Route
          path="/compliance/it-system-data"
          element={<It_system_data/>}
        />
        <Route
          path="/compliance/senitive-it-inventory"
          element={<Sensitive_it_inventory/>}
        />
        <Route
          path="/compliance/risk-assessment"
          element={<Risk_assessment/>}
        />
        <Route
          path="/compliance/it-security-audits"
          element={<It_security_audits/>}
        />
        <Route
          path="/compliance/security-control-catalog"
          element={<Security_control_catalog/>}
        />
        <Route
          path="/compliance/sec-540"
          element={<Sec_540/>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

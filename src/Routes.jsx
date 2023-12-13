import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PrescriptionsOne = React.lazy(() => import("pages/PrescriptionsOne"));
const AnalysisOne = React.lazy(() => import("pages/AnalysisOne"));
const MainOne = React.lazy(() => import("pages/MainOne"));
const CreateAnalysis = React.lazy(() => import("pages/CreateAnalysis"));
const CreateCheckUp = React.lazy(() => import("pages/CreateCheckUp"));
const MainChat = React.lazy(() => import("pages/MainChat"));
const CreatePrescription = React.lazy(() => import("pages/CreatePrescription"));
const Prescriptions = React.lazy(() => import("pages/Prescriptions"));
const Analysis = React.lazy(() => import("pages/Analysis"));
const Main = React.lazy(() => import("pages/Main"));
const CreatePatients = React.lazy(() => import("pages/CreatePatients"));
const LoginPatientOne = React.lazy(() => import("pages/LoginPatientOne"));
const LoginPatient = React.lazy(() => import("pages/LoginPatient"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPatientOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpatient" element={<LoginPatient />} />
          <Route path="/createpatients" element={<CreatePatients />} />
          <Route path="/main" element={<Main />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/createprescription" element={<CreatePrescription />} />
          <Route path="/mainchat" element={<MainChat />} />
          <Route path="/createcheckup" element={<CreateCheckUp />} />
          <Route path="/createanalysis" element={<CreateAnalysis />} />
          <Route path="/mainone" element={<MainOne />} />
          <Route path="/analysisone" element={<AnalysisOne />} />
          <Route path="/prescriptionsone" element={<PrescriptionsOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

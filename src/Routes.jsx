import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

// Doctors
// Dr Joker (Jokerge)
import AnalysisPageJohnWickDrJoker from "./styledPages/doctors/DrJoker/Analysis/JohnWick";
import AnalysisPageRayanDrJokerOne from "./styledPages/doctors/DrJoker/Analysis/RayanGosling/FirstAnalysis";
import AnalysisPageRayanDrJokerTwo from "./styledPages/doctors/DrJoker/Analysis/RayanGosling/SecondAnalysis";
import MainChatPageJokerJohn from "./styledPages/doctors/DrJoker/Comment/John Wick";
import MainChatPageJokerRayan from "./styledPages/doctors/DrJoker/Comment/Rayan Gos";
import CreateCheckUpPageJokerJohn from "./styledPages/doctors/DrJoker/CreateCheckUp/JohnWick"
import CreateCheckUpPageJokerRayan from "./styledPages/doctors/DrJoker/CreateCheckUp/RayanGos";
import CreatePrescriptionPageJokerJohn from "./styledPages/doctors/DrJoker/CreatePrescription/John Wick";
import CreatePrescriptionPageJokerRayan from "./styledPages/doctors/DrJoker/CreatePrescription/Rayan Gos";
import MainPageJokerJohnWick from "./styledPages/doctors/DrJoker/Main/JohnWick";
import MainPageJokerRayan from "./styledPages/doctors/DrJoker/Main/RayanGosling";
import CreateAnalysisPageJokerJohn from "./styledPages/doctors/DrJoker/CreateAnalysis/JohnWick";
import CreateAnalysisPageJokerRayan from "./styledPages/doctors/DrJoker/CreateAnalysis/RayanGosling";
import PrescriptionsPageJokerJohn from "./styledPages/doctors/DrJoker/Prescription/John Wick";
import PrescriptionsPageJokerRayanFirst from "./styledPages/doctors/DrJoker/Prescription/Rayan Gos/First";
import PrescriptionsPageJokerRayanSecond from "./styledPages/doctors/DrJoker/Prescription/Rayan Gos/Second";

// Dr Cena Rayan
import AnalysisPageCenaRayan from "./styledPages/doctors/DrCena/Analysis/Rayan Gos";
import MainChatPageCenaRayan from "./styledPages/doctors/DrCena/Comment/Rayan Gos";
import CreateAnalysisPageCenaRayan from "./styledPages/doctors/DrCena/CreateAnalysis/RayanGosling";
import CreateCheckUpPageCenaRayan from "./styledPages/doctors/DrCena/CreateCheckUp/RayanGos";
import CreatePrescriptionPageCenaRayan from "./styledPages/doctors/DrCena/CreatePrescription/Rayan Gos";
import MainPageCenaRayan from "./styledPages/doctors/DrCena/Main/RayanGosling";
import PrescriptionsPageCenaRayan from "./styledPages/doctors/DrCena/Prescription/Rayan Gosling";

// Patients 
// John Wick
import AnalysisOnePageJohnJoker from "./styledPages/patients/JohnWick/Analysis/Dr Joker";
import MainChatPageJohnJoker from "./styledPages/patients/JohnWick/Comment/Dr Joker";
import MainOnePageJohnJoker from "./styledPages/patients/JohnWick/Main/Dr Joker";
import PrescriptionsOnePageJohnJoker from "./styledPages/patients/JohnWick/Prescription/Dr Joker";
// Rayan Gosling
import AnalysisOnePageRayanCena from "./styledPages/patients/RayanGosling/Analysis/Dr Cena";
import AnalysisOnePageRayanJokerFirst from "./styledPages/patients/RayanGosling/Analysis/Dr Joker/First";
import AnalysisOnePageRayanJokerSecond from "./styledPages/patients/RayanGosling/Analysis/Dr Joker/Second";
import MainChatPageRayanCena from "./styledPages/patients/RayanGosling/Comment/Dr Cena";
import MainChatPageRayanJoker from "./styledPages/patients/RayanGosling/Comment/Dr Joker";
import MainOnePageRayanCena from "./styledPages/patients/RayanGosling/Main/Dr Cena";
import MainOnePageRayanJoker from "./styledPages/patients/RayanGosling/Main/Dr Joker";
import PrescriptionsOnePageRayanCena from "./styledPages/patients/RayanGosling/Prescription/Dr Cena";
import PrescriptionsOnePageRayanJokerFirst from "./styledPages/patients/RayanGosling/Prescription/Dr Joker/First";
import PrescriptionsOnePageRayanJokerSecond from "./styledPages/patients/RayanGosling/Prescription/Dr Joker/Second";

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
          {/* TEMPLATE */}
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

          {/* Doctors ROUTES */}
          {/* Dr Joker (a.k.a Jokerge) */}
          <Route path="/analysis/joker/john" element={<AnalysisPageJohnWickDrJoker/>}/>
          <Route path="/analysis/joker/rayan/first" element={<AnalysisPageRayanDrJokerOne/>}/>
          <Route path="/analysis/joker/rayan/second" element={<AnalysisPageRayanDrJokerTwo/>}/>
          <Route path="/main/chat/joker/john" element={<MainChatPageJokerJohn/>}/>
          <Route path="/main/chat/joker/rayan" element={<MainChatPageJokerRayan/>}/>
          <Route path="/checkup/joker/john" element={<CreateCheckUpPageJokerJohn/>}/>
          <Route path="/checkup/joker/rayan" element={<CreateCheckUpPageJokerRayan/>}/>
          <Route path="/create/prescription/joker/john" element={<CreatePrescriptionPageJokerJohn/>}/>
          <Route path="/create/prescription/joker/rayan" element={<CreatePrescriptionPageJokerRayan/>}/>
          <Route path="/main/joker/john" element={<MainPageJokerJohnWick/>}/>
          <Route path="/main/joker/rayan" element={<MainPageJokerRayan/>}/>
          <Route path="/create/analysis/joker/john" element={<CreateAnalysisPageJokerJohn/>}/>
          <Route path="/create/analysis/joker/rayan" element={<CreateAnalysisPageJokerRayan/>}/>
          <Route path="/prescription/joker/john" element={<PrescriptionsPageJokerJohn/>}/>
          <Route path="/prescription/joker/rayan/first" element={<PrescriptionsPageJokerRayanFirst/>}/>
          <Route path="/prescription/joker/rayan/second" element={<PrescriptionsPageJokerRayanSecond/>}/>

          {/* Dr Cena Rayan */}
          <Route path="/analysis/cena/rayan" element={<AnalysisPageCenaRayan/>}/>
          <Route path="/main/chat/cena/rayan" element={<MainChatPageCenaRayan/>}/>
          <Route path="/create/analysis/cena/rayan" element={<CreateAnalysisPageCenaRayan/>}/>
          <Route path="/checkup/cena/rayan" element={<CreateCheckUpPageCenaRayan/>}/>
          <Route path="/create/prescription/cena/rayan" element={<CreatePrescriptionPageCenaRayan/>}/>
          <Route path="/main/cena/rayan" element={<MainPageCenaRayan/>}/>
          <Route path="/prescription/cena/rayan" element={<PrescriptionsPageCenaRayan/>}/>

          {/* Patient ROUTES */}
          {/* John Wick */}
          <Route path="/analysis/wick/joker" element={<AnalysisOnePageJohnJoker/>}/>
          <Route path="/main/chat/wick/joker" element={<MainChatPageJohnJoker/>}/>
          <Route path="/main/wick/joker" element={<MainOnePageJohnJoker/>}/>
          <Route path="/prescription/wick/joker" element={<PrescriptionsOnePageJohnJoker/>}/>

          {/* Rayan Gosling */}
          <Route path="/analysis/gosling/cena" element={<AnalysisOnePageRayanCena/>}/>
          <Route path="/analysis/gosling/joker/first" element={<AnalysisOnePageRayanJokerFirst/>}/>
          <Route path="/analysis/gosling/joker/second" element={<AnalysisOnePageRayanJokerSecond/>}/>
          <Route path="/main/chat/gosling/cena" element={<MainChatPageRayanCena/>}/>
          <Route path="/main/chat/gosling/joker" element={<MainChatPageRayanJoker/>}/>
          <Route path="/main/gosling/cena" element={<MainOnePageRayanCena/>}/>
          <Route path="/main/gosling/joker" element={<MainOnePageRayanJoker/>}/>
          <Route path="/prescription/gosling/cena" element={<PrescriptionsOnePageRayanCena/>}/>
          <Route path="/prescription/gosling/joker/first" element={<PrescriptionsOnePageRayanJokerFirst/>}/>
          <Route path="/prescription/gosling/joker/second" element={<PrescriptionsOnePageRayanJokerSecond/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

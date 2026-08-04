import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Facility from "../Components/Facility";
import Training from "../Components/Training";
import StartTraining from "../Components/StartTraining";
import Result from "../Links/Result";
import Job from "../Links/Job";
import Curriculam from "../Links/Curriculam";
import Admission from "../Links/Admission";
import Support from "../Links/Support";
import Notices from "../Components/Notices";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/facility" element={<Facility></Facility>} />
        <Route path="/training" element={<Training></Training>} />
        <Route
          path="/start-training"
          element={<StartTraining></StartTraining>}
        />
        <Route path="/result" element={<Result></Result>} />
        <Route path="/job" element={<Job></Job>} />
        <Route path="/curriculam" element={<Curriculam></Curriculam>} />
        <Route path="/admission" element={<Admission></Admission>} />
        <Route path="/support" element={<Support></Support>} />
        <Route path="/notices" element={<Notices></Notices>} />

      </Routes>
      <Footer /> {/* এটিও সব পেজে স্থায়ী থাকবে */}
    </>
  );
};

export default AppRoutes;

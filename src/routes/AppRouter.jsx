import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SimpleLayout from "../layouts/SimpleHeaderLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Testimonials from "../pages/Testimonials";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CoursesFrontendPage from "../pages/CoursesFrontendPage";
import CoursesBackendPage from "../pages/CoursesBackendPage";
import CoursesTddPage from "../pages/CoursesTddPage";
import Tdd from "../pages/resources/Tdd";
import  IntroBackend from "../pages/resources/IntroBackend";
import DevBackend from "../pages/resources/DevBackend";
import FrontendCss from "../pages/resources/FrontendCss";
import FrontendHtml from "../pages/resources/FrontendHtml";
import FrontendJs from "../pages/resources/FrontendJs";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<ContactUs />} />
          <Route path="/services/front-end" element={<CoursesFrontendPage />} />
          <Route path="/services/front-end/fe1" element={<FrontendCss />} />
          <Route path="/services/front-end/fe2" element={<FrontendHtml />} />
          <Route path="/services/front-end/fe3" element={<FrontendJs />} />
          <Route path="/services/back-end" element={<CoursesBackendPage />} />
          <Route path="/services/back-end/be1" element={<IntroBackend />} />
          <Route path="/services/back-end/be2" element={<DevBackend />} />
          <Route path="/services/testing" element={<CoursesTddPage />} />
          <Route path="/services/testing/tdd" element={<Tdd />} />
          <Route path="/testimonios" element={<Testimonials />} />   
          <Route path="/sobre-nosotros" element={<AboutUs />} />   
        </Route>
        <Route element={<SimpleLayout />}>
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

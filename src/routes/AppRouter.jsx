import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SimpleLayout from "../layouts/SimpleHeaderLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CoursesFrontendPage from "../pages/CoursesFrontendPage";
import CoursesBackendPage from "../pages/CoursesBackendPage";
import CoursesTddPage from "../pages/CoursesTddPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<ContactUs />} />
          <Route path="/services/front-end" element={<CoursesFrontendPage />} />
          <Route path="/services/back-end" element={<CoursesBackendPage />} />
          <Route path="/services/testing" element={<CoursesTddPage />} />
          {/* <Route path="/" element={<Home />} />    */}
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

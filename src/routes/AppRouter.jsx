import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SimpleLayout from "../layouts/SimpleHeaderLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />   
                    <Route path="/contacto" element={<ContactUs />} />   
                    <Route path="/sobre-nosotros" element={<AboutUs />} />   
                </Route>
                <Route element={<SimpleLayout />}>
                <Route path="/registro" element={<Register />} />   
                <Route path="/login" element={<Login />} />   
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRouter;
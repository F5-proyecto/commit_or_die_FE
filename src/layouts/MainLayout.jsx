import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main className="main-layout">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout;
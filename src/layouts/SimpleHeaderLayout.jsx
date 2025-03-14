import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <header className="text-blue-3 text-xl font-bold font-afacad text-center p-6 bg-blue-1 border-b-2 border-blue-3">
                <Link to="/" className="hover:scale-105">TechCodeLab</Link>
            </header>
            <main className="bg-blue-1 h-screen pt-24">
                <Outlet/>
            </main>
            <footer className="text-blue-3 text-xl font-bold font-afacad text-center p-6 bg-blue-1">&copy; 2025 Commit or Die. Todos los derechos reservados.</footer>

        </>
    )
}

export default MainLayout;
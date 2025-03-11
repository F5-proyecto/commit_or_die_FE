import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header className="text-3xl text-center bg-blue-1 p-4 border-b-2 border-blue-3">header</header>
            <main className="main-layout">
                <Outlet/>
            </main>
        </>
    )
}

export default MainLayout;
import { Link } from 'react-router-dom';

const Footer = () => {
    const socials = [
        { name: "Sobre Nosotros", path: "/sobre-nosotros" },
        { name: "GitHub", path: "https://github.com/F5-proyecto" },
        { name: "Contáctanos", path: "/contacto" },
    ];

    return (
        <footer className="bg-blue-3 text-white font-afacad flex flex-col items-center gap-12 py-12 px-4 md:px-8">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-6 border-b-2 border-white border-solid">
                <h2 className="text-aqua text-2xl">TechCodeLab</h2>
                <div className="flex flex-wrap gap-4 mb-12 text-xl justify-center">
                    {
                        socials.map((social, index) => (
                            social.path.startsWith("http") ? (
                                <a href={social.path} key={index} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {social.name}
                                </a>
                            ) : (
                                <Link to={social.path} key={index} className="hover:underline">
                                    {social.name}
                                </Link>
                            )
                        ))
                    }
                </div>
            </div>
            <p className="text-center text-sm text-gray-400">&copy; 2025 Commit or Die. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;

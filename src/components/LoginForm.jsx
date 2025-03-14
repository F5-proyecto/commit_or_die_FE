import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.email || !form.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí puedes hacer la llamada a tu API para realizar el login
        // const response = await fetch("/api/login", { ... });

        // Si el login es exitoso, puedes redirigir al usuario o guardar el token.
    };

    return (
        <div className="flex justify-center items-center font-afacad px-4 sm:px-6 md:px-10">
            <form onSubmit={handleSubmit} className="bg-white p-16 rounded-lg shadow-lg w-full max-w-3xl flex flex-col form-bg">
                <h2 className="text-left text-3xl font-bold mb-6 font-briem-hand text-blue-3">Inicia Sesión</h2>
                
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2 placeholder-blue-3"
                />
                
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2 placeholder-blue-3"
                />
                
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-3 text-white rounded hover:scale-105 transition transform md:w-1/3"
                >
                    Inicia Sesión
                </button>

                <p className="text-center text-gray-600 mt-4">
                  ¿No tienes cuenta? <Link to="/registro" className="text-blue-500 hover:underline">Regístrate</Link>
                </p>

            </form>
        </div>
    );
};

export default LoginForm;

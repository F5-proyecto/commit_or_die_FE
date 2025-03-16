import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            console.log("Login successful:", data);

            localStorage.setItem("userId", data.userId);

            navigate("/");

        } catch (error) {
            console.error("Error:", error);
            alert("Error en el login: " + error.message);
        }
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

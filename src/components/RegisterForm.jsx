import React, { useState } from 'react';    
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.name || !form.lastName || !form.email || !form.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        
        const user = {
            name: `${form.name} ${form.lastName}`,
            email: form.email,
            password: form.password,
            role: "USER" 
        };

        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error("Error en el registro");
            }

            const data = await response.json();
            console.log("Usuario registrado:", data);

            navigate("/login");
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex justify-center items-center font-afacad px-4 sm:px-6 md:px-10">
            <form onSubmit={handleSubmit} className="bg-white p-16 rounded-lg shadow-lg w-full max-w-3xl flex flex-col form-bg">
                <h2 className="text-left text-3xl font-bold mb-6 font-briem-hand text-blue-3">Regístrate gratis</h2>
                <div className='flex flex-col sm:flex-row md:gap-6'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2 placeholder-blue-3"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Apellidos"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2 placeholder-blue-3"
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2  placeholder-blue-3"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-blue-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-2  placeholder-blue-3"
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-3 text-white rounded hover:scale-105 transition transform md:w-1/3"
                >
                    Regístrate
                </button>
            </form>
        </div>
    );
};

export default Register;

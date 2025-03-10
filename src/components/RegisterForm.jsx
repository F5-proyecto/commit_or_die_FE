import React, { useState } from 'react';


const Register = () => {
    const [form, setForm] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return (
        <div className="flex justify-center items-center min-h-sceen bg-gray-200">
            <form onSubmit={handleSubmit} className= "bg-white p-8 rounded-lg shadow-lg w-80">
              <h2 className="text-center text-2x1 font-bold mb-4">RegisterFree</h2>  
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 mb-3 borde-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                 <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
            <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          ></button>
            </form>
        </div>
    );
};

export default Register;


    
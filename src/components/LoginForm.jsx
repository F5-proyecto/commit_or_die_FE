export default function LoginForm() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log in</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">e-mail</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tucorreo@email.com" 
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Pasword</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********" 
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Inicia Sesión
            </button>
          </form>
          
          <p className="text-center text-gray-600 mt-4">
            ¿No tienes cuenta? <a href="#" className="text-blue-500 hover:underline">Regíster</a>
          </p>
        </div>
      </div>
    );
  }
  
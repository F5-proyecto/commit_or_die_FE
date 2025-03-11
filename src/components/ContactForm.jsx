export default function ContactForm() {
    return(
        <div className="flex min-h-screen items center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log in</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">full name</label>
                        <input 
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="write your name"
                            required
                        />
            </div>               
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">e-mail</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="write your email" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">message</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="write your message" 
              rows="4"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
             </button>
        </form>
        
        <div className="text-center text-gray-600 mt-6">
          <p><strong>e-mail:</strong> techcodelab@gmail.com</p>
          <p><strong>Telephone:</strong> +1 (555) 123-4567</p>
          <p><strong>location:</strong> Factoría F5 Asturias</p>
        </div>
        <footer className="text-center text-gray-500 mt-6">
          <p><strong>TechCodeLab</strong></p>
          <p><a href="#" className="text-blue-500 hover:underline">about us</a> | <a href="#" className="text-blue-500 hover:underline">GitHub</a> | <a href="#" className="text-blue-500 hover:underline">Contáctanos</a></p>
          <p className="mt-2">© 2025 Commit or Die. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

        



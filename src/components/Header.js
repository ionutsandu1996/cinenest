
import React from 'react'
function Header() {
return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold text-yellow-400">CineNest</h1>
        <div className="flex items-center gap-4">
            <input
                type="text"
                placeholder="Căutare..."
                className="px-3 py-1 rounded bg-gray-800 text-white"
            />
            <button className="bg-yellow-400 text-black px-4 py-1 rounded">Înregistrează-te</button>
            <button className="bg-gray-700 px-4 py-1 rounded">Autentificare</button>

        </div>
    </header>
);

}

export default Header;
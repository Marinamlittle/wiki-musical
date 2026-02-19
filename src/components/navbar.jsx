
import { useState } from 'react'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 md:px-6 bg-[#121015] backdrop-blur-md">
      
      {/* 1. SECCIÓN IZQUIERDA: Logotipo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white group-hover:text-[#2F4B75] transition-colors duration-300">
          <path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/>
        </svg>

        <h2 className="text-xl md:text-2xl font-extralight text-white tracking-wider">
          Wiki<span className="text-[#89888A]">Music</span>
        </h2>
      </div>

      {/* 2. SECCIÓN DERECHA (MÓVIL): Menú Hamburguesa */}
      <div className="flex md:hidden items-center gap-4">
        {/* 3. Al hacer clic, cambiamos el estado (si está abierto lo cierra, y viceversa) */}
        <button 
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-white focus:outline-none hover:text-blue-500 transition-colors"
        >
          {/* Si está abierto mostramos una 'X', si está cerrado la hamburguesa */}
          {menuAbierto ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 3. SECCIÓN DERECHA (PC): Enlaces de navegación */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Inicio</a>
        <a href="#" className="hover:text-white transition-colors">Artistas Top</a>
        <a href="#" className="hover:text-white transition-colors">Géneros</a>
        <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 hover:border-blue-500 cursor-pointer transition-colors flex items-center justify-center">
          <span className="text-xs">👤</span>
        </div>
      </div>

      {/* 4. EL MENÚ DESPLEGABLE PARA MÓVIL*/}
      {menuAbierto && (
        <div className="absolute top-[100%] left-0 w-full bg-[#121015] border-t border-white/10 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl">
          <a href="#" className="text-white text-lg font-medium tracking-wide">Inicio</a>
          <a href="#" className="text-neutral-400 text-lg hover:text-white transition-colors">Artistas Top</a>
          <a href="#" className="text-neutral-400 text-lg hover:text-white transition-colors">Géneros</a>
          <div className="mt-2 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div>
        </div>
      )}

    </nav>
  )
}
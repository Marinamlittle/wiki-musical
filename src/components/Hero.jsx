import { useState, useMemo } from 'react'; // Añadimos useMemo
import { useNavigate } from 'react-router-dom';
import { useTrends } from '../hooks/useTrends';

export default function Hero() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const misFavoritos = [
    'Justin Bieber', 'Camila Cabello', 'Shawn Mendes', 'Ariana Grande', 
    'Dua Lipa', 'The Weeknd', 'Taylor Swift', 'Bad Bunny', 'Selena Gomez', 
    'Ed Sheeran', 'BTS', 'Billie Eilish', 'Olivia Rodrigo', 'Drake',
    'Bruno Mars', 'Cardi B', 'Post Malone', 'Doja Cat', 'Harry Styles',
    'Lizzo', 'Megan Thee Stallion', 'Travis Scott', 'Kendrick Lamar',
    'Rihanna', 'SZA', 'The Kid LAROI', 'J Balvin', 'Rosalía',
  ];

  const tendenciasPopulares = ['The Weeknd', 'Taylor Swift', 'Bad Bunny', 'Pop', 'Top 2026'];
  const { images, loading } = useTrends(misFavoritos);

  // --- TRUCO: Creamos 4 versiones diferentes del set de imágenes ---
  const filasMezcladas = useMemo(() => {
    if (!images.length) return [[], [], [], []];
    
    // Función para mezclar aleatoriamente
    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);
    
    return [
      images,                       // Fila 1: Normal
      shuffle(images),              // Fila 2: Aleatoria
      [...images].reverse(),        // Fila 3: Al revés
      shuffle([...images].reverse()) // Fila 4: Aleatoria e invertida
    ];
  }, [images]);

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== '') navigate(`/search/${busqueda}`);
  };

  const buscarTendencia = (tendencia) => {
    navigate(`/search/${tendencia}`);
  };

  return (
    <section className="relative w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center overflow-hidden bg-[#121015]">
      
      {/* CARRUSEL DINÁMICO OPTIMIZADO - VELOCIDAD REDUCIDA */}
      {!loading && (
        <div className="absolute inset-0 flex flex-col gap-4 scale-125 opacity-30 pointer-events-none justify-center">
          
          {/* Fila 1: Muy lenta (80 segundos por vuelta) */}
          <div className="flex gap-4 w-max animate-scroll" style={{ animationDuration: '80s' }}>
            {[...filasMezcladas[0], ...filasMezcladas[0]].map((img, index) => (
              <img key={`r1-${index}`} src={img} className="w-auto h-35 object-cover rounded-xl shadow-md" alt="Trend" />
            ))}
          </div>
          
          {/* Fila 2: Lenta y Reversa (70 segundos) */}
          <div className="flex gap-4 w-max animate-scroll" style={{ animationDirection: 'reverse', animationDuration: '70s' }}>
            {[...filasMezcladas[1], ...filasMezcladas[1]].map((img, index) => (
              <img key={`r2-${index}`} src={img} className="w-auto h-35 object-cover rounded-xl shadow-md" alt="Trend" />
            ))}
          </div>

          {/* Fila 3: Súper lenta (100 segundos) */}
          <div className="flex gap-4 w-max animate-scroll ml-[-200px]" style={{ animationDuration: '100s' }}>
            {[...filasMezcladas[2], ...filasMezcladas[2]].map((img, index) => (
              <img key={`r3-${index}`} src={img} className="w-auto h-35 object-cover rounded-xl shadow-md" alt="Trend" />
            ))}
          </div>

          {/* Fila 4: Lenta y Reversa (90 segundos) */}
          <div className="flex gap-4 w-max animate-scroll" style={{ animationDirection: 'reverse', animationDuration: '90s' }}>
            {[...filasMezcladas[3], ...filasMezcladas[3]].map((img, index) => (
              <img key={`r4-${index}`} src={img} className="w-auto h-35 object-cover rounded-xl shadow-md" alt="Trend" />
            ))}
          </div>

        </div>
      )}

      {/* GRADIENTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121015]/20 via-[#121015]/80 to-[#121015]"></div>
      
      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 text-center px-6 w-full max-w-4xl flex flex-col items-center mt-[-5vh]">
        <h1 className="text-6xl md:text-8xl font-semibold mb-8 text-white tracking-tighter drop-shadow-2xl">
          Music<span className="text-[#4D88FF] drop-shadow-[0_0_25px_rgba(77,136,255,0.4)] font-light">Pedia</span>
        </h1>
        
        <form onSubmit={manejarBusqueda} className="flex items-center w-full bg-zinc-900/60 backdrop-blur-xl p-2 rounded-full border border-zinc-700/50 shadow-2xl focus-within:border-[#4D88FF]/50 focus-within:bg-zinc-900/90 transition-all duration-300">
          <input 
            type="text" 
            placeholder="¿A quién quieres descubrir hoy?" 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="flex-1 px-8 py-4 bg-transparent text-white text-xl focus:outline-none placeholder-zinc-500"
          />
          <button type="submit" className="px-10 py-4 bg-[#4D88FF] hover:bg-[#4D88FF]/80 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(77,136,255,0.3)]">
            Buscar
          </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest mr-2 hidden md:block"> Tendencias: </span>
          {tendenciasPopulares.map((tendencia) => (
            <button key={tendencia} type="button" onClick={() => buscarTendencia(tendencia)} className="px-5 py-2 rounded-full border border-zinc-700/50 bg-zinc-900/40 text-zinc-300 text-sm font-medium hover:text-white hover:border-[#4D88FF] hover:bg-[#4D88FF]/10 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              {tendencia}
            </button>
          ))}
        </div>
      </div>

      {/* FOOTER PROFESIONAL */}
      <div className="absolute bottom-6 z-10 w-full flex flex-col md:flex-row items-center justify-between px-12 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600/60 pointer-events-auto">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} MUSIC<span className="text-zinc-700">PEDIA</span> — BY <span className="text-zinc-500 hover:text-[#4D88FF] transition-colors cursor-default">Marina Mateo</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/in/mmldev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4D88FF] transition-all duration-300 hover:-translate-y-0.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Marinamlittle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

    </section>
  );
}
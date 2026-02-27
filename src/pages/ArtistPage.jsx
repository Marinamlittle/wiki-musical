// src/pages/ArtistPage.jsx
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { useArtist } from '../hooks/useArtist';

export default function ArtistPage() {
  const { nombre } = useParams(); // Sacamos el nombre del artista de la URL
  const { data, loading, error } = useArtist(nombre);

  if (loading) return <div className="bg-zinc-950 min-h-screen text-white flex items-center justify-center text-2xl">Cargando biografía...</div>;
  if (error) return <div className="bg-zinc-950 min-h-screen text-white flex items-center justify-center text-red-500">{error}</div>;

  // Si data es un array (por nuestro cambio anterior), cogemos el primer resultado
  const artista = Array.isArray(data) ? data[0] : data;

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      
      {artista && (
        <div className="animate-fadeIn">
          {/* BANNER GIGANTE */}
          <div className="relative h-[40vh] w-full overflow-hidden">
            <img 
              src={artista.strArtistBanner || 'https://via.placeholder.com/1200x400'} 
              className="w-full h-full object-cover opacity-50"
              alt="Banner"
            />
            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-zinc-950">
              <h1 className="text-5xl md:text-7xl font-black">{artista.strArtist}</h1>
            </div>
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Columna Izquierda: Foto y Datos Rápidos */}
            <div className="flex flex-col items-center">
              <img 
                src={artista.strArtistThumb} 
                className="w-64 h-64 rounded-2xl shadow-2xl mb-6 border-4 border-zinc-800"
                alt={artista.strArtist}
              />
              <div className="bg-zinc-900 p-6 rounded-2xl w-full">
                <p className="text-zinc-400 mb-2 font-bold">Género: <span className="text-white font-normal">{artista.strGenre}</span></p>
                <p className="text-zinc-400 mb-2 font-bold">Origen: <span className="text-white font-normal">{artista.strCountry}</span></p>
                <p className="text-zinc-400 mb-2 font-bold">Formado en: <span className="text-white font-normal">{artista.intFormedYear}</span></p>
              </div>
            </div>

            {/* Columna Derecha: Biografía */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Biografía</h2>
              <p className="text-zinc-300 leading-relaxed text-lg whitespace-pre-wrap">
                {artista.strBiographyES || artista.strBiographyEN}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
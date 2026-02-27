import { useState, useEffect } from 'react';
import { BASE_URL } from '../services/apiConfig';

export const useArtist = (artistName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no le pasamos nombre, no hace nada
    if (!artistName) return; 

    const fetchArtist = async () => {
      setLoading(true); // Empezamos a cargar
      setError(null);   // Limpiamos errores previos

      try {
        const response = await fetch(`${BASE_URL}/search.php?s=${artistName}`);
        const result = await response.json();
        
        if (result.artists) {
          setData(result.artists); 
        } else {
          setError('No se encontraron artistas con ese nombre');
        }
      } catch (err) {
        setError('Error al conectar con la API');
      } finally {
        setLoading(false); // Terminamos de cargar (haya ido bien o mal)
      }
    };

    fetchArtist();
  }, [artistName]);

  return { data, loading, error };
};
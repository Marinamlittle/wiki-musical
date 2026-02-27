import { useState, useEffect } from 'react';

export function useTrends(listaArtistas) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Usamos un proxy para saltar el bloqueo de CORS que ves en la consola
        const proxy = "https://corsproxy.io/?"; 
        
        const promesas = listaArtistas.map(nombre =>
          fetch(`${proxy}${encodeURIComponent(`https://theaudiodb.com/api/v1/json/2/search.php?s=${nombre}`)}`)
            .then(res => res.json())
        );

        const resultados = await Promise.all(promesas);
        
        const fotos = resultados
          .map(res => (res.artists && res.artists[0]) ? res.artists[0].strArtistFanart : null)
          .filter(foto => foto !== null);

        // Si la API sigue bloqueada, cargamos estas de reserva para que no se vea negro
        if (fotos.length === 0) {
          setImages([
            "https://www.theaudiodb.com/images/media/artist/fanart/spvryu1347980801.jpg",
            "https://www.theaudiodb.com/images/media/artist/fanart/uupyxx1342640221.jpg",
            "https://www.theaudiodb.com/images/media/artist/fanart/qstpsp1342640238.jpg"
          ]);
        } else {
          setImages(fotos);
        }
      } catch (error) {
        console.error("Error en el fetch de tendencias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading };
}
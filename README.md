# 🎵 MusicPedia

## 🚀 Características Principales (Core Pages)

La aplicación está estructurada en torno a las siguientes vistas principales:

* **Página de Artista (Artist Page):** El perfil completo del músico. Muestra su información biográfica, discografía completa ordenada por lanzamientos y estadísticas en tiempo real obtenidas mediante API (oyentes mensuales, nivel de popularidad, seguidores).
* **Página de Álbum (Album Page):** Vista detallada de un disco. Incluye el *tracklist* interactivo con duraciones y un sistema de enlaces cruzados en las colaboraciones (*featurings*) que permite saltar directamente al perfil de los artistas invitados.
* **Explorador de Géneros (Genre Hub):** Un directorio para descubrir música por estilos. Al entrar en un género específico (ej. *Indie*, *Jazz*, *Electrónica*), el usuario accede a una selección curada de sus "Artistas Referentes" y "Álbumes Esenciales".
* **Tendencias (Top Charts):** El radar de actualidad musical. Permite filtrar entre tendencias globales o locales, mostrando el Top 10 de canciones más escuchadas, artistas que se han hecho virales recientemente y un radar de nuevos lanzamientos.
* **Autenticación (Login/Registro):** Sistema de acceso unificado (con opciones de inicio de sesión social, como Google o Spotify) para que los usuarios puedan tener su propia cuenta en la plataforma.
* **Mi Biblioteca (User Profile):** El espacio personal del usuario. Aquí se almacena toda la música, álbumes y artistas que el usuario ha marcado como "Favoritos" durante su navegación.

## 🛠️ Stack Tecnológico

* **Frontend:** React, JavaScript (JS), HTML
* **Build Tool:** Vite
* **Estilos:** Tailwind CSS
* **Datos / APIs:** Integración con la API de Spotify (para catálogo musical y estadísticas)

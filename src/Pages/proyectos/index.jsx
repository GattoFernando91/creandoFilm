import React, { useEffect } from 'react';
import '../../style.css';
import './proyectos.css';

const PaginaProyectos = () => {
  useEffect(() => {
    const loadInstagramScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    loadInstagramScript();
  }, []);

  return (
    <>
      <h2 className="h2Servicios">Proyectos</h2>
      <div className="instagramEmbedContainer">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/creandofilm/"
          data-instgrm-version="13"
          style={{ width: '50%' }}
        >
        </blockquote>
      </div>
    </>
  );
};

export { PaginaProyectos };
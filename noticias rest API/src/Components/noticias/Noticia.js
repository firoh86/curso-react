import React from "react";
import "./Noticia.css";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  // Extraer los datos
  const { title, urlToImage, content, url, source } = noticia;
  // Condicionalmente cargar la imagen si está disponible
  const image = urlToImage ? (
    <div className="img-container">
      <img src={urlToImage} className="noticia__img" alt="" />
      <span>{source.name}</span>
    </div>
  ) : null;
  return (
    <>
      <div className="noticia-card">
        <h3 className="card__title">{title}</h3>
        {image}
        <p className="card__content">{content}</p>
        <div className="card__url">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver mas...
          </a>
        </div>
      </div>
    </>
  );
};
Noticia.prototype = {
  noticia: PropTypes.object.isRequired
};
export default Noticia;

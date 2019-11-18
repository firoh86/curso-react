import React from "react";
import Noticia from "../noticias/Noticia.js";
import "./ListaNoticias.css";
import PropTypes from "prop-types";

const ListaNoticias = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => (
      // Retorna el componente de noticia
      <Noticia key={noticia.url} noticia={noticia} />
    ))}
  </div>
);
ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};
export default ListaNoticias;

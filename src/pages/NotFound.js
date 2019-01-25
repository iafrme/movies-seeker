import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div>
    <h1 className="title">404</h1>
    <h2 className="subtitle">
      Ups!!! {''}
      <span role="img" aria-label="">
        🤯
      </span>
      no existe la página
    </h2>

    <Link className="button is-info" to="/">
      Volver a buscar otra Pélicula
    </Link>
  </div>
);

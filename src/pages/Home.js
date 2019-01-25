import React, { Component } from 'react';
import { Title } from '../Components/Title';
import { SearchForm } from '../Components/SearchForm';
import { MoviesList } from '../Components/MoviesList';

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>
        Sin resultados
        <span role="img" aria-label="cry">
          😭 😭
        </span>
      </p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    return (
      <div>
        <Title>Buscador de Películas...</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small> Busca una Película... </small>
        )}
      </div>
    );
  }
}

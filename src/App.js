import React, { Component } from 'react';
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';
import { MoviesList } from './Components/MoviesList';

class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>Sin resultados </p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    return (
      <div className="App">
        <Title>Buscador de Películas...</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small> Busca una Pelicula... </small>
        )}
      </div>
    );
  }
}

export default App;

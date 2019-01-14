import React, { Component } from 'react';
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = { results: [] };

  _handleResults = results => {
    this.setState({ results });
  };

  _renderResults() {
    const { results } = this.state;
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>;
    });
  }

  render() {
    return (
      <div className="App">
        <Title>Buscador de Películas...</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? (
          <p>Sin resultados </p>
        ) : (
          this._renderResults()
        )}
      </div>
    );
  }
}

export default App;

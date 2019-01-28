import React, {Component, Fragment} from 'react';
import filmData from '../data/film_data.js';
import FilmList from '../components/FilmList';

class FilmListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = filmData;
  }

  render(){
    return (
      <FilmList key={this.state.id} films={this.state.films} />
    )
  }

}

export default FilmListContainer;

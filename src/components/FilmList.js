import React, {Component, Fragment} from 'react';
import Film from './Film';

class FilmList extends Component {
  render(){
    const films = this.props.films.map((film, index) => {
      return (

        <Film film={film} key={index}/>
      )
    })

    return (
      <Fragment>
        {films}
      </Fragment>
    )
  }
}

export default FilmList;

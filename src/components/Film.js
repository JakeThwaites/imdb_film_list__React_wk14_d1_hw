import React, {Component, Fragment} from 'react';

class Film extends Component {
  render(){
    const {id, url, name} = this.props.film;

    return (
      <Fragment>
        <li><a href={url}>{name}</a></li>
      </Fragment>
    )
  }
}

export default Film;

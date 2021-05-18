import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./movie-view.scss";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div className="movie-view">
        <div className="movie-image">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <Link to={`/directors/${movie.Director.Name}`}>
          <Button variant="dark">{movie.Director.Name}</Button>
        </Link>
        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button variant="dark">{movie.Genre.Name}</Button>
        </Link>
        <Button variant="dark" onClick={() => { onBackClick(null) }}>Back</Button>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};

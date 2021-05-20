import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./movie-view.scss";
import {NavbarView} from "../navbar-view/navbar-view";

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  addFavorite(movie) {
    let token = localStorage.getItem("token");
    let url =
      "https://cnjlv.herokuapp.com/users/" +
      localStorage.getItem("user") +
      "/movies/" +
      movie._id;

    console.log(token);

    axios
      .post(url, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        // window.open("/", "_self");
        window.open("/users/" + localStorage.getItem("user"), "_self");
        alert("Added to favorites!");
      });
  }


  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div>
      <div>
      <NavbarView />
    </div>
      <div className="movie-view" style={{
                  marginTop: '70px',
                }}>
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
        <div>
              <Button
                variant="dark"
                onClick={() => this.addFavorite(movie)}
              >
                Add to Favorites
              </Button>
            </div>
        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button variant="dark">{movie.Genre.Name}</Button>
        </Link>
        <Button variant="dark" onClick={() => { onBackClick(null) }}>Back</Button>
      </div>
      </div>
    );
    }
}
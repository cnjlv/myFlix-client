import React from 'react';
import { MovieCard } from '../movie-card/movie-card.jsx';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'How to Marry a Millionaire', Description: 'How to Marry a Millionaire is a 1953 American romantic comedy film.', Genre: 'Comedy', Director: 'Jean Negulesco', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZTM0MGU1MjgtMDJiMy00N2RkLWFiZDMtMmY5MGE5MGRmNzEwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        { _id: 2, Title: 'Niagara', Description: 'As two couples are visiting Niagara Falls, tensions between one wife and her husband reach the level of murder.', Genre: 'Thriller', Director: 'Henry Hathaway', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDBhNWE4Y2UtMTA5Mi00YzYyLTliMWMtMjc3OGU0ZWFiMGVhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        { _id: 3, Title: 'The Seven Year Itch', Description: 'When his family goes away for the summer, a hitherto faithful husband with an overactive imagination is tempted by a beautiful neighbbor.', Genre: 'Comedy', Director: 'Billy Wilder', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZTJkMTBkNmYtYjdkZi00YjU1LWE5YWMtZGZhYWVmNzk4NzY3XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR0,0,182,268_AL_.jpg'}
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">This list is empty!</div>;


    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie = {selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
} 
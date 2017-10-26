import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import MovieDetail from './MovieDetail';

class MovieList extends Component {
   state = { movies: [] };

   componentWillMount() {
      console.log('Will Mount');

      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=eea85db15baebd083012741bef30dd93&language=en-US&page=1')
      .then((response) => {
         this.setState({ movies: response.data.results });
      });
   }
   
   renderMovieList() {
      if (this.state.movies.length > 0) {
         return this.state.movies.map((movies, index) =>
            <MovieDetail key={index} movies={movies} />
         );
      }
   }
   
   render() {
      console.log('render movielist', this.state.movies);
      
      return (
         <View>
            {this.renderMovieList()}
         </View>
      );
   }
}

export default MovieList;

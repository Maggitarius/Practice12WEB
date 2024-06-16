import React from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

const HomePage = ({ state, setState, gettingFilms }) => {
  return (
    <Container>
      <Header 
        query={state.query} 
        setQuery={(query) => setState({ ...state, query })}
        gettingFilms={gettingFilms} 
      />
      <MoviesGrid>
        {state.films.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  padding: 20px;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

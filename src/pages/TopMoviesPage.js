import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const API_KEY = 'BKH4XVZ-DN9MCP4-GJ4348M-8CVT8J1';

const TopMoviesPage = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      const api_url = 'https://api.kinopoisk.dev/v1.3/movie?sortField=year&sortType=-1&limit=10';
      const headers = {
        'X-API-KEY': API_KEY
      };
      
      try {
        const response = await axios.get(api_url, { headers });
        if (response.status !== 200) {
          throw new Error('Error fetching data');
        }
        setTopMovies(response.data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchTopMovies();
  }, []);

  return (
    <Container>
      <h1>Top Movies</h1>
      <MoviesGrid>
        {topMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default TopMoviesPage;

const Container = styled.div`
  padding: 20px;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

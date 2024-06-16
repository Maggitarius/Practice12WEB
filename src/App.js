import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopMoviesPage from './pages/TopMoviesPage';
import GlobalStyle from './styles/GlobalStyle';

const API_KEY = 'FBB3PKQ-YVT4QP4-H4EZFS5-1XJB0FC';

function App() {
  const [state, setState] = useState({
    query: '',
    films: [],
    topFilms: []
  });

  const gettingFilms = async (e) => {
    e.preventDefault();
    const query = state.query;

    const api_url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${query}`;
    const headers = {
      'X-API-KEY': API_KEY
    };

    try {
      const response = await axios.get(api_url, { headers });
      if (response.status !== 200) {
        throw new Error('Error fetching data');
      }
      const data = response.data.docs;
      setState({
        ...state,
        films: data.slice(0, 10)
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage state={state} setState={setState} gettingFilms={gettingFilms} />} 
        />
        <Route path="/top-movies" element={<TopMoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #1c1c1c; /* Темный фон */
    color: #f0f0f0; /* Светлый текст */
  }

  a {
    color: #ff9f00;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ffa726;
  }

  button {
    background-color: #ff9f00;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ffa726;
  }

  .card {
    background-color: #333333;
    color: #f0f0f0;
    border: 1px solid #444444;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: left;
  }

  .card-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 1em;
    margin-bottom: 20px;
  }
`;

export default GlobalStyle;

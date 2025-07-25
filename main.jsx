import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind or other global styles
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './components/PlayerContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>

    </BrowserRouter>

  </React.StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LeaderboardScreen from './components/LeaderboardScreen.jsx'


const isLeaderboard = new URLSearchParams(window.location.search).get('view') === 'leaderboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLeaderboard ? <LeaderboardScreen /> : <App />}
  </StrictMode>,
)
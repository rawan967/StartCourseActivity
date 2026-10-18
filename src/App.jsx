import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import GameScreen from './components/GameScreen';
import levels from './data/levels';
import courseImage from './assets/image.png';
import './App.css';

function App() {
  const [personId, setPersonId] = useState(null);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(null); 

  const handleLoginSuccess = (id) => {
    setPersonId(id);
  };

  const handleLevelComplete = () => {
     const nextIndex = currentLevelIndex + 1;
     if (nextIndex < levels.length) {
        setCurrentLevelIndex(nextIndex);
     } else {
        setIsFinished(true); 
     }
  };

 useEffect(() => {
    if (isFinished && personId) {
      const fetchFinalScore = async () => {
        const apiUrl = 'http://localhost:5550';
        const eventId = '7-14'; 
        
        try {
          
          const response = await fetch(`${apiUrl}/api/events/startcourse/${eventId}/${personId}`);
          const data = await response.json();
          if (data.status === true) {
            setFinalScore(data.message.data3); 
          }
        } catch (error) {
          console.error("Error fetching final stats:", error);
        }
      };
      fetchFinalScore();
    }
  }, [isFinished, personId]);

  if (isFinished) {
     return (
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
         <h1 style={{ color: 'var(--primary)', fontSize: '40px', marginBottom: '20px' }}>🎉 CONGRATULATIONS! 🎉</h1>
         <p style={{ color: 'var(--text-muted)', fontSize: '20px', marginBottom: '40px' }}>You have completed all levels successfully.</p>
         
         <div style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow)', minWidth: '300px' }}>
            <h2 style={{ color: 'var(--text)', marginBottom: '15px' }}>Awesome Job!</h2>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px' }}>
              ⭐ Total Score: {finalScore !== null ? finalScore : "Loading..."} 
            </div>
         </div>
       </div>
     );
  }

  return (
    <div style={{ width: 'min(900px, 100%)', margin: 'auto' }}>
      <header style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
         <img src={courseImage} alt="Start Course 26" className='w-[50%] h-[7%]' />
      </header>

      {!personId ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <GameScreen 
           level={levels[currentLevelIndex]} 
           personId={personId}
           eventId="7-14"
           onLevelComplete={handleLevelComplete} 
        />
      )}
    </div>
  );
}

export default App;
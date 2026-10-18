import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import GameScreen from './components/GameScreen';
import levels from './data/levels';
import courseImage from './assets/image.png';
import { API_URL, EVENT_ID } from './config';
import './App.css';

function App() {
  const [personId, setPersonId] = useState(null);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(null); 
  const [leaderboard, setLeaderboard] = useState(null);

  const handleLoginSuccess = (id, progress = 0) => {
    setPersonId(id);
    // progress = عدد المراحل اللي خلّصها قبل كده. نكمّل من اللي بعدها
    if (progress >= levels.length) {
      setIsFinished(true);
    } else {
      setCurrentLevelIndex(progress);
    }
  };

  const handleLevelComplete = () => {
     const nextIndex = currentLevelIndex + 1;
     if (nextIndex < levels.length) {
        setCurrentLevelIndex(nextIndex);
     } else {
        setIsFinished(true); 
     }
  };

 const fetchLeaderboard = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events/startcourse/${EVENT_ID}/leaderboard`);
      const data = await response.json();
      if (data.status === true) setLeaderboard(data.message);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

 useEffect(() => {
    if (isFinished && personId) {
      const fetchFinalScore = async () => {
        try {
          const response = await fetch(`${API_URL}/api/events/startcourse/${EVENT_ID}/${personId}`);
          const data = await response.json();
          if (data.status === true) {
            setFinalScore(data.message.data3); 
          }
        } catch (error) {
          console.error("Error fetching final stats:", error);
        }
      };
      fetchFinalScore();
      fetchLeaderboard();
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

         <div style={{ background: 'var(--card-bg)', padding: '24px', borderRadius: '15px', boxShadow: 'var(--shadow)', width: 'min(520px, 100%)', marginTop: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h2 style={{ color: 'var(--primary)', margin: 0 }}>🏆 Leaderboard</h2>
              <button className="btn btn-secondary" style={{ padding: '8px 14px' }} onClick={fetchLeaderboard}>↻ Refresh</button>
            </div>
            {leaderboard === null ? (
              <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
            ) : (
              <>
                {leaderboard.slice(0, 10).map((row, i) => (
                  <div key={row.person_id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', marginBottom: '6px', background: row.person_id === personId ? 'var(--bg-secondary)' : 'transparent', fontWeight: row.person_id === personId ? 700 : 400 }}>
                    <span>{i + 1}. {row.name}</span>
                    <span>{row.score} pts</span>
                  </div>
                ))}
                {(() => {
                  const myIndex = leaderboard.findIndex((r) => r.person_id === personId);
                  return myIndex >= 10 ? (
                    <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
                      Your rank: {myIndex + 1} of {leaderboard.length}
                    </p>
                  ) : null;
                })()}
              </>
            )}
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
           levelNumber={currentLevelIndex + 1}
           eventId={EVENT_ID}
           onLevelComplete={handleLevelComplete} 
        />
      )}
    </div>
  );
}

export default App;
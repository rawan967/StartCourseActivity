import React, { useState, useEffect } from 'react';

const GameScreen = ({ level, personId, eventId, onLevelComplete }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');


  const [availableCards, setAvailableCards] = useState([]);
  const [solutionCards, setSolutionCards] = useState([]); 
  const [multiBlanks, setMultiBlanks] = useState({});     
  const [draggedCard, setDraggedCard] = useState(null);

  useEffect(() => {
    resetPuzzle();
    setFeedback('');
  }, [level]);


  const resetPuzzle = () => {
    if (level) {
      const shuffled = [...level.cards].sort(() => Math.random() - 0.5);
      setAvailableCards(shuffled);
      setSolutionCards([]);
      setMultiBlanks({});
      setFeedback('');
    }
  };

  const handleDragStart = (card) => setDraggedCard(card);
  const handleDragOver = (e) => e.preventDefault(); 

  const handleDropToSolution = () => {
    if (!draggedCard) return;
    if (level.type === 'arrange') {
      if (!solutionCards.find(c => c.id === draggedCard.id)) {
        setSolutionCards([...solutionCards, draggedCard]);
        setAvailableCards(availableCards.filter(c => c.id !== draggedCard.id));
      }
    } else {
      const previousCard = solutionCards[0];
      setSolutionCards([draggedCard]);
      let newAvailable = availableCards.filter(c => c.id !== draggedCard.id);
      if (previousCard) newAvailable.push(previousCard);
      setAvailableCards(newAvailable);
    }
    setDraggedCard(null);
  };

  const handleDropToBlank = (blankId) => {
    if (!draggedCard) return;
    const previousCard = multiBlanks[blankId];
    setMultiBlanks({ ...multiBlanks, [blankId]: draggedCard });
    let newAvailable = availableCards.filter(c => c.id !== draggedCard.id);
    if (previousCard) newAvailable.push(previousCard);
    setAvailableCards(newAvailable);
    setDraggedCard(null);
  };

  const handleDropToAvailable = () => {
    if (!draggedCard) return;
    if (!availableCards.find(c => c.id === draggedCard.id)) {
      setAvailableCards([...availableCards, draggedCard]);
      setSolutionCards(solutionCards.filter(c => c.id !== draggedCard.id));
      const newBlanks = { ...multiBlanks };
      Object.keys(newBlanks).forEach(key => {
        if (newBlanks[key]?.id === draggedCard.id) newBlanks[key] = null;
      });
      setMultiBlanks(newBlanks);
    }
    setDraggedCard(null);
  };

  const handleCorrectAnswer = async () => {
    let isCorrect = false;

    if (level.type === 'arrange') {
      const currentOrder = solutionCards.map(c => c.id);
      isCorrect = JSON.stringify(currentOrder) === JSON.stringify(level.correctOrder);
    } else if (level.type === 'complete_multi') {
      const blanksKeys = Object.keys(level.blanks);
      isCorrect = blanksKeys.every(key => multiBlanks[key]?.id === level.blanks[key]);
      if (blanksKeys.length !== Object.keys(multiBlanks).length) isCorrect = false;
    } else {
      isCorrect = solutionCards.length > 0 && solutionCards[0].id === level.correctOrder[0];
    }

    if (!isCorrect) {
      setFeedback('Wrong answer! Try again.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('Correct! Saving score...');
    
    const scoreEarned = 10; 
    const apiUrl = 'http://localhost:5550';

    try {
 
      const response = await fetch(`${apiUrl}/api/events/startcourse/${eventId}/updatescore/${scoreEarned}/${personId}`, {
        method: 'PATCH',
      });
      
      const data = await response.json();

      if (data.status === true) {
        setFeedback('Score saved! Loading next level...');
        setTimeout(() => { onLevelComplete(); }, 1500);
      } else {
        setFeedback('Error saving score.');
      }
    } catch (err) {
      setFeedback('Connection error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCodePreview = () => {
    if (!level.codePreview) return null;
    return (
      <div style={{ backgroundColor: '#111827', padding: '15px', borderRadius: '12px', marginBottom: '20px', textAlign: 'left', fontFamily: 'monospace' }}>
        {level.codePreview.map((line, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '15px', padding: '6px', color: line.error ? '#ef4444' : '#e5e7eb', backgroundColor: line.missing ? 'rgba(9, 23, 184, 0.15)' : 'transparent' }}>
            <span style={{ color: '#6b7280', width: '20px', textAlign: 'right' }}>{line.num}</span>
            {line.blank ? (
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDropToBlank(line.blank)}
                style={{ border: '1px dashed var(--primary)', minWidth: '100px', padding: '2px 10px', minHeight: '24px', backgroundColor: 'rgba(255,255,255,0.1)', cursor: 'pointer' }}
              >
                {multiBlanks[line.blank] ? multiBlanks[line.blank].text : <span style={{ color: 'var(--text-muted)' }}>Drop here</span>}
              </div>
            ) : (
              <span>{line.code}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '15px', backgroundColor: 'var(--card-bg)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
        <div>
           <h3 style={{ margin: 0, color: 'var(--primary)' }}>Level {level?.id}</h3>
           <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{level?.menuTitle}</span>
        </div>
      </div>

      <div style={{ padding: '20px', backgroundColor: 'var(--panel)', borderRadius: '12px', border: '1px solid var(--border)' }}>
        {renderCodePreview()}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '14px' }}>{level?.leftTitle || "AVAILABLE CARDS"}</h4>
            <div onDragOver={handleDragOver} onDrop={handleDropToAvailable} style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {availableCards.map(card => (
                <div key={card.id} draggable onDragStart={() => handleDragStart(card)} style={{ padding: '12px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', cursor: 'grab', fontFamily: 'monospace', fontSize: '14px' }}>
                  {card.text}
                </div>
              ))}
            </div>
          </div>
          {level?.type !== 'complete_multi' && (
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '14px' }}>{level?.rightTitle || "SOLUTION"}</h4>
              <div onDragOver={handleDragOver} onDrop={handleDropToSolution} style={{ minHeight: '150px', padding: '15px', border: '2px dashed var(--primary)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                {solutionCards.length === 0 ? (
                  <p style={{ margin: 'auto', color: 'var(--text-muted)' }}>Drop here</p>
                ) : (
                  solutionCards.map(card => (
                    <div key={card.id} draggable onDragStart={() => handleDragStart(card)} style={{ padding: '12px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--primary)', borderRadius: '8px', cursor: 'grab', fontFamily: 'monospace', fontSize: '14px' }}>
                      {card.text}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '25px 0' }}>
        <button className="btn btn-secondary" onClick={resetPuzzle} disabled={isSubmitting}>↻ RESET</button>
        <button className="btn btn-primary" onClick={handleCorrectAnswer} disabled={isSubmitting}>
          {isSubmitting ? 'SAVING...' : 'RUN CODE ▶'}
        </button>
      </div>

      {feedback && (
        <div className={`result-message ${feedback.includes('Correct') || feedback.includes('saved') ? 'success' : 'error'}`}>{feedback}</div>
      )}
    </section>
  );
};

export default GameScreen;
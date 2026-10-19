import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';

const Results = ({ eventId, personId, sessionScore, totalScore, onPlayAgain }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_URL}/api/events/startcourse/${eventId}/leaderboard`);
        const data = await res.json();
        if (data.status) setRows(data.message);
        else setError('Could not load leaderboard.');
      } catch {
        setError('Could not load leaderboard.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [eventId]);

  const myIndex = rows.findIndex((r) => String(r.person_id) === String(personId));
  const top = rows.slice(0, 10);

  return (
    <section style={{ textAlign: 'center' }}>
      <div style={{ padding: '25px', backgroundColor: 'var(--card-bg)', borderRadius: '16px', boxShadow: 'var(--shadow)', marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--primary)', marginTop: 0 }}>Session complete 🎉</h2>
        <div style={{ fontSize: '32px', fontWeight: 'bold' }}>+{sessionScore} pts</div>
        <p style={{ color: 'var(--text-muted)', margin: '8px 0 0' }}>
          Total score: <b>{totalScore}</b>
          {myIndex >= 0 && <> · Your rank: <b>#{myIndex + 1}</b></>}
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: 'var(--panel)', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'left' }}>
        <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Leaderboard</h3>
        {loading && <p style={{ color: 'var(--text-muted)' }}>Loading...</p>}
        {error && <p style={{ color: 'var(--danger)' }}>{error}</p>}

        {top.map((r, i) => {
          const isMe = String(r.person_id) === String(personId);
          return (
            <div key={r.person_id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', marginBottom: '6px', backgroundColor: isMe ? 'rgba(59,130,246,0.15)' : 'var(--card-bg)', fontWeight: isMe ? 'bold' : 'normal' }}>
              <span>#{i + 1} {r.name}</span>
              <span>{r.score} pts</span>
            </div>
          );
        })}

        {myIndex >= 10 && (
          <>
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>⋮</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', backgroundColor: 'rgba(59,130,246,0.15)', fontWeight: 'bold' }}>
              <span>#{myIndex + 1} {rows[myIndex].name}</span>
              <span>{rows[myIndex].score} pts</span>
            </div>
          </>
        )}
      </div>

      {onPlayAgain && (
        <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={onPlayAgain}>
          PLAY AGAIN ↻
        </button>
      )}
    </section>
  );
};

export default Results;
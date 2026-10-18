import { useState, useEffect } from 'react';
import { API_URL, EVENT_ID } from '../config';
import levels from '../data/levels';

const REFRESH_MS = 5000; // التحديث كل 5 ثواني
const SHOW_TOP = 10;     // عدد اللي يظهروا على الشاشة
const medals = ['🥇', '🥈', '🥉'];

// صفحة المنظمين: افتحيها بـ  /?view=leaderboard  على الشاشة الكبيرة
const LeaderboardScreen = () => {
  const [rows, setRows] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch(`${API_URL}/api/events/startcourse/${EVENT_ID}/leaderboard`);
        const data = await res.json();
        if (active && data.status === true) {
          setRows(data.message);
          setUpdatedAt(new Date());
          setFailed(false);
        }
      } catch {
        if (active) setFailed(true);
      }
    };
    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => { active = false; clearInterval(timer); };
  }, []);

  const finished = rows.filter((r) => r.progress >= levels.length).length;

  return (
    <div style={{ width: 'min(1100px, 100%)', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '2px' }}>
        🏆 LIVE LEADERBOARD
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '22px', margin: '8px 0 28px' }}>
        {rows.length} players · {finished} finished
      </p>

      {rows.length === 0 && (
        <p style={{ fontSize: '28px', color: 'var(--text-muted)', marginTop: '60px' }}>
          Waiting for players...
        </p>
      )}

      {rows.slice(0, SHOW_TOP).map((row, i) => (
        <div
          key={row.person_id}
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 200px 140px',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 24px',
            marginBottom: '12px',
            borderRadius: '16px',
            background: i === 0 ? 'var(--primary)' : 'var(--card-bg)',
            color: i === 0 ? '#fff' : 'var(--text)',
            boxShadow: 'var(--shadow)',
            fontSize: 'clamp(20px, 3vw, 34px)',
            fontWeight: 700,
            textAlign: 'left',
          }}
        >
          <span style={{ textAlign: 'center' }}>{medals[i] || i + 1}</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</span>
          <span style={{ fontSize: '0.6em', fontWeight: 500, opacity: 0.8 }}>
            Level {Math.min(row.progress, levels.length)}/{levels.length}
          </span>
          <span style={{ textAlign: 'right' }}>{row.score} pts</span>
        </div>
      ))}

      <p style={{ color: 'var(--text-muted)', marginTop: '24px', fontSize: '16px' }}>
        {failed
          ? '⚠️ Connection problem, retrying...'
          : updatedAt && `Updated ${updatedAt.toLocaleTimeString()}`}
      </p>
    </div>
  );
};

export default LeaderboardScreen;
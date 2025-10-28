import { useState } from 'react';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('energetic');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, style })
      });
      const data = await response.json();
      setScript(data.script);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(script);
    alert('Script copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>🎬 Viral Script Generator</h1>
        <p style={styles.subtitle}>Create unstoppable, engaging 5-minute scripts that keep audiences hooked</p>
      </div>

      <div style={styles.card}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Video Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Secret productivity hacks, Mind-blowing science facts..."
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Script Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            style={styles.select}
          >
            <option value="energetic">⚡ High Energy & Exciting</option>
            <option value="mysterious">🔮 Mysterious & Intriguing</option>
            <option value="storytelling">📖 Storytelling & Emotional</option>
            <option value="educational">🎓 Educational & Fascinating</option>
            <option value="comedy">😂 Comedy & Entertaining</option>
          </select>
        </div>

        <button
          onClick={generateScript}
          disabled={loading || !topic.trim()}
          style={{
            ...styles.button,
            opacity: (loading || !topic.trim()) ? 0.6 : 1,
            cursor: (loading || !topic.trim()) ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? '✨ Creating Your Viral Script...' : '🚀 Generate Unstoppable Script'}
        </button>
      </div>

      {script && (
        <div style={styles.resultCard}>
          <div style={styles.resultHeader}>
            <h2 style={styles.resultTitle}>Your Viral Script 🎯</h2>
            <button onClick={copyToClipboard} style={styles.copyButton}>
              📋 Copy Script
            </button>
          </div>
          <div style={styles.scriptBox}>
            {script.split('\n').map((line, i) => (
              <p key={i} style={styles.scriptLine}>{line}</p>
            ))}
          </div>
          <div style={styles.tips}>
            <h3 style={styles.tipsTitle}>💡 Viral Tips:</h3>
            <ul style={styles.tipsList}>
              <li>Record with high energy - match the script's pace!</li>
              <li>Use dynamic camera angles and quick cuts</li>
              <li>Add engaging background music</li>
              <li>Include captions for better retention</li>
              <li>Post during peak hours for maximum reach</li>
            </ul>
          </div>
        </div>
      )}

      <div style={styles.footer}>
        <p>Made for creators who want to go viral 🔥</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  hero: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '40px',
    paddingTop: '40px'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.95
  },
  card: {
    maxWidth: '700px',
    margin: '0 auto 30px',
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  formGroup: {
    marginBottom: '25px'
  },
  label: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border 0.3s',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '18px',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'white',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    border: 'none',
    borderRadius: '12px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 6px 20px rgba(245, 87, 108, 0.4)'
  },
  resultCard: {
    maxWidth: '900px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  resultHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  resultTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333'
  },
  copyButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    background: '#667eea',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  scriptBox: {
    background: '#f8f9fa',
    padding: '30px',
    borderRadius: '12px',
    marginBottom: '30px',
    lineHeight: '1.8',
    fontSize: '1.05rem'
  },
  scriptLine: {
    marginBottom: '12px',
    color: '#333'
  },
  tips: {
    background: '#fff3cd',
    padding: '20px',
    borderRadius: '10px',
    borderLeft: '4px solid #ffc107'
  },
  tipsTitle: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#856404'
  },
  tipsList: {
    marginLeft: '20px',
    color: '#856404'
  },
  footer: {
    textAlign: 'center',
    color: 'white',
    marginTop: '60px',
    fontSize: '1.1rem',
    opacity: 0.9
  }
};

import './Placeholder.css';
export default function Games() { return (<div className="placeholder-page"><div className="placeholder-icon">🎮</div><div className="placeholder-title">休闲游戏大厅</div><div className="placeholder-subtitle">敬请期待 — 多种休闲小游戏即将上线</div><div className="placeholder-cards">{['🃏','🐍','💣','🎯'].map((e,i)=><div key={i} className="placeholder-card">{e}</div>)}</div></div>); }

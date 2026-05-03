function BottomNav({ screen, onNavigate }) {
  return (
    <nav className="bottom-nav">
      <button className={screen === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>
        <span className="nav-icon">⌂</span>
        Home
      </button>
      <button className={screen === 'report' ? 'active' : ''} onClick={() => onNavigate('report')}>
        <span className="nav-icon">🗎</span>
        Laporan
      </button>
      <button className={screen === 'profile' ? 'active' : ''} onClick={() => onNavigate('profile')}>
        <span className="nav-icon">⚙</span>
        Profil
      </button>
    </nav>
  )
}

export default BottomNav

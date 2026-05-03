import { useMemo, useState } from 'react'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ReportPage from './pages/ReportPage'
import SignUpPage from './pages/SignUpPage'
import { INITIAL_REPORTS, INITIAL_USER } from './constants/mockData'
import './App.css'

function App() {
  const [screen, setScreen] = useState('landing')
  const [user, setUser] = useState(INITIAL_USER)
  const [reports, setReports] = useState(INITIAL_REPORTS)

  const greeting = useMemo(() => {
    if (!user.name) return 'Halo'
    return `Halo, ${user.name}`
  }, [user.name])

  const handleLogin = ({ username }) => {
    setUser((prev) => ({ ...prev, name: username }))
    setScreen('home')
  }

  const handleSignUp = ({ name, localEmail, password }) => {
    const email = `${localEmail}@gmail.com`
    setUser((prev) => ({
      ...prev,
      name: name || prev.name,
      email,
      password,
    }))
    setScreen('login')
  }

  const handleSubmitReport = (report) => {
    const newReport = {
      ...report,
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      status: 'Diproses',
    }
    setReports((prev) => [newReport, ...prev])
    setScreen('home')
  }

  const stats = [
    { label: 'Total Laporan', value: reports.length },
    { label: 'Diproses', value: reports.filter((item) => item.status === 'Diproses').length },
    { label: 'Selesai', value: reports.filter((item) => item.status === 'Selesai').length },
    { label: 'Ditolak', value: reports.filter((item) => item.status === 'Ditolak').length },
  ]

  const screens = {
    landing: (
      <LandingPage onLogin={() => setScreen('login')} onSignup={() => setScreen('signup')} />
    ),
    login: (
      <LoginPage
        onSubmit={handleLogin}
        onSignup={() => setScreen('signup')}
        onBack={() => setScreen('landing')}
      />
    ),
    signup: (
      <SignUpPage
        onSubmit={handleSignUp}
        onBack={() => setScreen('landing')}
      />
    ),
    home: (
      <HomePage
        greeting={greeting}
        stats={stats}
        reports={reports}
        onCreateReport={() => setScreen('report')}
      />
    ),
    report: (
      <ReportPage
        onSubmit={handleSubmitReport}
        onBack={() => setScreen('home')}
      />
    ),
    profile: (
      <ProfilePage
        user={user}
        onBack={() => setScreen('home')}
        onLogout={() => {
          setScreen('landing')
        }}
      />
    ),
  }

  return (
    <main className="app-shell">
      <div className="phone-frame">{screens[screen]}</div>
      {['home', 'report', 'profile'].includes(screen) && (
        <BottomNav screen={screen} onNavigate={setScreen} />
      )}
    </main>
  )
}

export default App

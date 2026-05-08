import { useMemo, useState } from 'react'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ReportPage from './pages/ReportPage'
import SignUpPage from './pages/SignUpPage'
import {
  INITIAL_REPORTS,
  INITIAL_USER,
} from './constants/mockData'

import './App.css'

function App() {
  const [screen, setScreen] = useState('landing')

  // USER STATE
  const [user, setUser] = useState({
    ...INITIAL_USER,
    password: '',
    photo: '',
  })

  // REPORT STATE
  const [reports, setReports] =
    useState(INITIAL_REPORTS)

  // GREETING
  const greeting = useMemo(() => {
    if (!user.name) return 'Halo'
    return `Halo, ${user.name}`
  }, [user.name])

  // LOGIN
  const handleLogin = ({
    username,
    password,
  }) => {
    if (
      username === user.name &&
      password === user.password
    ) {
      setScreen('home')
    } else {
      alert('Username atau password salah')
    }
  }

  // SIGNUP
  const handleSignUp = ({
    name,
    localEmail,
    password,
  }) => {
    const email = `${localEmail}@gmail.com`

    setUser({
      name,
      email,
      password,
      address: 'Depok',
      phone: '08123456789',
      role: 'Masyarakat',
      photo: '',
    })

    setScreen('login')
  }

  // SUBMIT REPORT
  const handleSubmitReport = (report) => {
    const newReport = {
      ...report,
      date: new Date().toLocaleDateString(
        'id-ID',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
      status: 'Diproses',
    }

    setReports((prev) => [
      newReport,
      ...prev,
    ])

    setScreen('home')
  }

  // STATS
  const stats = [
    {
      label: 'Total Laporan',
      value: reports.length,
    },
    {
      label: 'Diproses',
      value: reports.filter(
        (item) => item.status === 'Diproses'
      ).length,
    },
    {
      label: 'Selesai',
      value: reports.filter(
        (item) => item.status === 'Selesai'
      ).length,
    },
    {
      label: 'Ditolak',
      value: reports.filter(
        (item) => item.status === 'Ditolak'
      ).length,
    },
  ]

  // SCREEN ROUTER
  const screens = {
    landing: (
      <LandingPage
        onLogin={() => setScreen('login')}
        onSignup={() => setScreen('signup')}
      />
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
        onCreateReport={() =>
          setScreen('report')
        }
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

        // EDIT FOTO
        onPhotoChange={(photo) =>
          setUser((prev) => ({
            ...prev,
            photo,
          }))
        }
      />
    ),
  }

  return (
    <main className="app-shell">
      <div className="phone-frame">
        {screens[screen]}
      </div>

      {[
        'home',
        'report',
        'profile',
      ].includes(screen) && (
        <BottomNav
          screen={screen}
          onNavigate={setScreen}
        />
      )}
    </main>
  )
}

export default App
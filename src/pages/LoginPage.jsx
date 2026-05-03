import { useState } from 'react'

function LoginPage({ onSubmit, onSignup, onBack }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ username: username.trim(), password })
  }

  return (
    <form className="screen center" onSubmit={handleSubmit}>
      <button className="back-link" type="button" onClick={onBack}>
        {'<'} Kembali
      </button>
      <div className="logo">ADUIN</div>
      <h2>Login</h2>
      <input
        className="field"
        placeholder="Masukkan username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        className="field"
        type="password"
        placeholder="Masukkan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button className="btn primary" type="submit">
        Login
      </button>
      <button className="link-btn" type="button" onClick={onSignup}>
        Belum punya akun? Sign up
      </button>
    </form>
  )
}

export default LoginPage

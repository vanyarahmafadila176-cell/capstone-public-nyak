import { useState } from 'react'

function SignUpPage({ onSubmit, onBack }) {
  const [name, setName] = useState('')
  const [localEmail, setLocalEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (localEmail.includes('@')) {
      setEmailError('Cukup isi nama email saja, @gmail.com sudah otomatis.')
      return
    }
    if (password !== confirmPassword) return
    setEmailError('')
    onSubmit({ name: name.trim(), localEmail: localEmail.trim().toLowerCase(), password })
  }

  return (
    <form className="screen center" onSubmit={handleSubmit}>
      <button className="back-link" type="button" onClick={onBack}>
        {'<'} Kembali
      </button>
      <div className="logo">ADUIN</div>
      <h2>Sign up</h2>

      <input
        className="field"
        placeholder="Masukkan nama"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <div className="email-group">
        <input
          className="field email-input"
          placeholder="Masukkan nama email"
          value={localEmail}
          onChange={(event) => {
            const value = event.target.value.replace(/\s+/g, '')
            setLocalEmail(value)
            if (value.includes('@')) {
              setEmailError('Jangan ketik @gmail.com, itu sudah default.')
            } else {
              setEmailError('')
            }
          }}
          required
        />
        <span className="email-suffix">@gmail.com</span>
      </div>
      {emailError && <p className="error-text">{emailError}</p>}

      <input
        className="field"
        type="password"
        placeholder="Masukkan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={8}
        required
      />
      <input
        className="field"
        type="password"
        placeholder="Masukkan ulang password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        minLength={8}
        required
      />

      {password && confirmPassword && password !== confirmPassword && (
        <p className="error-text">Password dan konfirmasi password harus sama.</p>
      )}

      <button
        className="btn primary"
        type="submit"
        disabled={password !== confirmPassword || !!emailError}
      >
        Sign up
      </button>
    </form>
  )
}

export default SignUpPage

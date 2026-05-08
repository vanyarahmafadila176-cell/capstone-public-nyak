import { useState } from 'react'

function SignUpPage({
  onSubmit,
  onBack,
}) {
  const [name, setName] =
    useState('')

  const [localEmail, setLocalEmail] =
    useState('')

  const [phone, setPhone] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('')

  const [
    emailError,
    setEmailError,
  ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // VALIDASI EMAIL
    if (localEmail.includes('@')) {
      setEmailError(
        'Cukup isi nama email saja, @gmail.com sudah otomatis.'
      )

      return
    }

    // VALIDASI NOMOR TELEPON
    if (
      phone.length < 10 ||
      phone.length > 13
    ) {
      alert(
        'Nomor telepon harus 10-13 digit'
      )

      return
    }

    // VALIDASI PASSWORD
    if (password.length < 8) {
      alert(
        'Password minimal 8 karakter'
      )

      return
    }

    // VALIDASI KONFIRM PASSWORD
    if (
      password !== confirmPassword
    ) {
      alert(
        'Password dan konfirmasi password harus sama'
      )

      return
    }

    setEmailError('')

    // KIRIM DATA
    onSubmit({
      name: name.trim(),

      localEmail:
        localEmail
          .trim()
          .toLowerCase(),

      phone: phone.trim(),

      password,
    })
  }

  return (
    <form
      className="screen center"
      onSubmit={handleSubmit}
    >
      {/* BACK */}
      <button
        className="back-link"
        type="button"
        onClick={onBack}
      >
        {'<'} Kembali
      </button>

      {/* LOGO */}
      <div className="logo">
        ADUIN
      </div>

      <h2>Sign up</h2>

      {/* NAMA */}
      <input
        className="field"
        placeholder="Masukkan nama"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        required
      />

      {/* EMAIL */}
      <div className="email-group">
        <input
          className="field email-input"
          placeholder="Masukkan nama email"
          value={localEmail}
          onChange={(event) => {
            const value =
              event.target.value.replace(
                /\s+/g,
                ''
              )

            setLocalEmail(value)

            if (
              value.includes('@')
            ) {
              setEmailError(
                'Jangan ketik @gmail.com, itu sudah default.'
              )
            } else {
              setEmailError('')
            }
          }}
          required
        />

        <span className="email-suffix">
          @gmail.com
        </span>
      </div>

      {/* ERROR EMAIL */}
      {emailError && (
        <p className="error-text">
          {emailError}
        </p>
      )}

      {/* NOMOR TELEPON */}
      <input
        className="field"
        type="tel"
        placeholder="Masukkan nomor telepon"
        value={phone}
        onChange={(event) => {
          const value =
            event.target.value.replace(
              /[^0-9]/g,
              ''
            )

          setPhone(value)
        }}
        minLength={10}
        maxLength={13}
        required
      />

      {/* PASSWORD */}
      <input
        className="field"
        type="password"
        placeholder="Masukkan password minimal 8 karakter"
        value={password}
        onChange={(event) =>
          setPassword(
            event.target.value
          )
        }
        minLength={8}
        required
      />

      {/* KONFIRM PASSWORD */}
      <input
        className="field"
        type="password"
        placeholder="Masukkan ulang password"
        value={confirmPassword}
        onChange={(event) =>
          setConfirmPassword(
            event.target.value
          )
        }
        minLength={8}
        required
      />

      {/* ERROR PASSWORD */}
      {password &&
        confirmPassword &&
        password !==
          confirmPassword && (
          <p className="error-text">
            Password dan konfirmasi
            password harus sama.
          </p>
        )}

      {/* BUTTON */}
      <button
        className="btn primary"
        type="submit"
        disabled={
          password !==
            confirmPassword ||
          !!emailError
        }
      >
        Sign up
      </button>
    </form>
  )
}

export default SignUpPage
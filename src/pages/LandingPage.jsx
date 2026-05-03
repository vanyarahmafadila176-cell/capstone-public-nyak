import landingIllustration from '../assets/logo.png'

function LandingPage({ onLogin, onSignup }) {
  return (
    <section className="screen center landing-screen">
      <img className="landing-art" src={landingIllustration} alt="Ilustrasi pengaduan masyarakat" />
      <div className="logo">ADUIN</div>
      <p className="subtitle">Pusat pengaduan masyarakat</p>
      <div className="landing-actions">
        <button className="btn primary" onClick={onLogin}>
          Login
        </button>
        <button className="btn light" onClick={onSignup}>
          Sign up
        </button>
      </div>
      <p className="brand-tag">@aduin</p>
    </section>
  )
}

export default LandingPage

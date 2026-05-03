function ProfilePage({ user, onBack, onLogout }) {
  return (
    <section className="screen">
      <div className="top-row">
        <button className="icon-btn" type="button" onClick={onBack}>
          {'<'}
        </button>
        <div className="logo">ADUIN</div>
      </div>

      <div className="profile-header">
        <div className="avatar">◉</div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      <article className="card profile-detail">
        <p>
          <strong>Nama Lengkap</strong>
          <span>{user.name}</span>
        </p>
        <p>
          <strong>Alamat</strong>
          <span>{user.address}</span>
        </p>
        <p>
          <strong>Nomor Telepon</strong>
          <span>{user.phone}</span>
        </p>
        <p>
          <strong>Status</strong>
          <span>{user.role}</span>
        </p>
      </article>

      <button className="btn danger full" onClick={onLogout}>
        Logout
      </button>
    </section>
  )
}

export default ProfilePage

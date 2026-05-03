function ProfilePage({ user, onBack, onLogout, onPhotoChange }) {
  return (
    <section className="screen">
      {/* HEADER */}
      <div className="top-row">
        <button className="icon-btn" type="button" onClick={onBack}>
          {'<'}
        </button>
        <div className="logo">ADUIN</div>
      </div>

      {/* PROFILE HEADER */}
      <div className="profile-header">

        {/* FOTO PROFIL */}
        <div className="avatar-wrapper">
          {user.photo ? (
            <img
              src={user.photo}
              alt="Profile"
              className="profile-photo"
            />
          ) : (
            <div className="avatar">◉</div>
          )}

          {/* INPUT FOTO */}
          <label className="upload-photo-btn">
            Edit Foto
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(event) => {
                const file = event.target.files?.[0]
                if (file) {
                  const imageUrl = URL.createObjectURL(file)
                  onPhotoChange(imageUrl)
                }
              }}
            />
          </label>
        </div>

        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      {/* DETAIL */}
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

      {/* LOGOUT */}
      <button className="btn danger full" onClick={onLogout}>
        Logout
      </button>
    </section>
  )
}

export default ProfilePage
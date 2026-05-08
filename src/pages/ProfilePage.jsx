function ProfilePage({
  user,
  onBack,
  onLogout,
  onPhotoChange,
}) {
  // AMBIL & PISAH NAMA
  const fullName = user?.name || ''
  const nameParts = fullName.trim().split(' ')

  const firstName = nameParts[0] || ''
  const lastName =
    nameParts.length > 1
      ? nameParts.slice(1).join(' ')
      : '-'

  return (
    <section className="screen">

      {/* HEADER */}
      <div className="top-row">
        <button
          className="icon-btn"
          type="button"
          onClick={onBack}
        >
          {'<'}
        </button>

        <div className="logo">
          ADUIN
        </div>
      </div>

      {/* PROFILE HEADER */}
      <div className="profile-header">

        {/* FOTO */}
        <div className="avatar-wrapper">

          {user.photo ? (
            <img
              src={user.photo}
              alt="Profile"
              className="profile-photo"
            />
          ) : (
            <div className="avatar">
              ◉
            </div>
          )}

          {/* EDIT FOTO */}
          <label className="upload-photo-btn">
            Edit Foto

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(event) => {
                const file =
                  event.target.files?.[0]

                if (file) {
                  const imageUrl =
                    URL.createObjectURL(file)

                  onPhotoChange(imageUrl)
                }
              }}
            />
          </label>
        </div>

        {/* NAMA */}
        <h2>{user.name}</h2>

        {/* EMAIL */}
        <p>{user.email}</p>
      </div>

      {/* DETAIL */}
      <article className="card profile-detail">

        <p>
          <strong>Nama Depan</strong>
          <span>{firstName}</span>
        </p>

        <p>
          <strong>Nama Belakang</strong>
          <span>{lastName}</span>
        </p>

        <p>
          <strong>Alamat</strong>
          <span>{user.address || '-'}</span>
        </p>

        <p>
          <strong>Nomor Telepon</strong>
          <span>{user.phone || '-'}</span>
        </p>

        <p>
          <strong>Status</strong>
          <span>{user.role || '-'}</span>
        </p>

      </article>

      {/* LOGOUT */}
      <button
        className="btn danger full"
        onClick={onLogout}
      >
        Logout
      </button>

    </section>
  )
}

export default ProfilePage
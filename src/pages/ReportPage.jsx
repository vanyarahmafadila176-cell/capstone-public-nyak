import { useState } from 'react'

const initialForm = {
  reporterName: '',
  phone: '',
  category: '',
  address: '',
  title: '',
  description: '',
  fileName: '',
}

function ReportPage({ onSubmit, onBack }) {
  const [form, setForm] = useState(initialForm)

  const isComplete =
    form.reporterName.trim() &&
    form.phone.trim() &&
    form.category.trim() &&
    form.address.trim() &&
    form.title.trim() &&
    form.description.trim() &&
    form.fileName.trim()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isComplete) return

    onSubmit({
      reporterName: form.reporterName,
      phone: form.phone,
      category: form.category,
      title: form.title,
      place: form.address,
      description: form.description,
      evidence: form.fileName,
    })

    setForm(initialForm)
  }

  return (
    <form className="screen" onSubmit={handleSubmit}>
      {/* HEADER */}
      <div className="top-row">
        <button className="icon-btn" type="button" onClick={onBack}>
          {'<'}
        </button>
        <h2>Buat Laporan</h2>
      </div>

      {/* FORM TABLE */}
      <div className="report-table">

        {/* Nama */}
        <div className="table-row">
          <label>Nama Pelapor</label>
          <input
            className="field"
            placeholder="Masukkan nama anda"
            value={form.reporterName}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                reporterName: event.target.value,
              }))
            }
            required
          />
        </div>

      {/* Alamat */}
        <div className="table-row">
          <label>Alamat Lengkap</label>
          <input
            className="field"
            placeholder="Masukkan alamat lengkap anda"
            value={form.address}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                address: event.target.value,
              }))
            }
            required
          />
        </div>

        {/* Nomor Telepon */}
        <div className="table-row">
          <label>Nomor Telepon</label>
          <input
            className="field"
            placeholder="Masukkan nomor telepon anda"
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                phone: event.target.value,
              }))
            }
            required
          />
        </div>

        {/* Kategori */}
        <div className="table-row">
          <label>Kategori Laporan</label>
          <select
            className="field"
            value={form.category}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                category: event.target.value,
              }))
            }
            required
          >
            <option value="">Pilih kategori laporan</option>
            <option value="Infrastruktur">Infrastruktur</option>
            <option value="Kebersihan">Kebersihan</option>
            <option value="Keamanan">Keamanan</option>
            <option value="Layanan Publik">Layanan Publik</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        {/* Deskripsi */}
        <div className="table-row textarea-row">
          <label>Deskripsi</label>
          <textarea
            className="field area"
            placeholder="Masukkan laporan anda"
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
            required
          />
        </div>

        {/* Dokumentasi */}
        <div className="table-row">
          <label>Dokumentasi</label>
          <input
            className="field file-input"
            type="file"
            accept="image/*"
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                fileName: event.target.files?.[0]?.name || '',
              }))
            }
            required
          />
        </div>
      </div>

      {/* BUTTON */}
      <button
        className="btn primary full"
        type="submit"
        disabled={!isComplete}
      >
        Kirim Laporan
      </button>
    </form>
  )
}

export default ReportPage
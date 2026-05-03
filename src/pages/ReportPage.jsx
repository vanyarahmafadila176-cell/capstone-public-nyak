import { useState } from 'react'

const initialForm = {
  reporterName: '',
  type: '',
  address: '',
  title: '',
  description: '',
  fileName: '',
}

function ReportPage({ onSubmit, onBack }) {
  const [form, setForm] = useState(initialForm)

  const isComplete =
    form.reporterName.trim() &&
    form.type.trim() &&
    form.address.trim() &&
    form.title.trim() &&
    form.description.trim() &&
    form.fileName.trim()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isComplete) return

    onSubmit({
      reporterName: form.reporterName,
      title: form.title,
      place: form.address,
      type: form.type,
      description: form.description,
      evidence: form.fileName,
    })
    setForm(initialForm)
  }

  return (
    <form className="screen" onSubmit={handleSubmit}>
      <div className="top-row">
        <button className="icon-btn" type="button" onClick={onBack}>
          {'<'}
        </button>
        <h2>Buat Laporan</h2>
      </div>

      <div className="report-table">
        <div className="table-row">
          <label>Nama Pelapor</label>
          <input
            className="field"
            placeholder="Masukkan nama pelapor"
            value={form.reporterName}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, reporterName: event.target.value }))
            }
            required
          />
        </div>
        <div className="table-row">
          <label>Jenis Laporan</label>
          <input
            className="field"
            placeholder="Contoh: Infrastruktur"
            value={form.type}
            onChange={(event) => setForm((prev) => ({ ...prev, type: event.target.value }))}
            required
          />
        </div>
        <div className="table-row">
          <label>Alamat</label>
          <input
            className="field"
            placeholder="Masukkan alamat lokasi"
            value={form.address}
            onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
            required
          />
        </div>
        <div className="table-row">
          <label>Judul Laporan</label>
          <input
            className="field"
            placeholder="Masukkan judul laporan"
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            required
          />
        </div>
        <div className="table-row textarea-row">
          <label>Deskripsi</label>
          <textarea
            className="field area"
            placeholder="Tulis detail laporan..."
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, description: event.target.value }))
            }
            required
          />
        </div>
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

      <button className="btn primary full" type="submit" disabled={!isComplete}>
        Kirim Laporan
      </button>
    </form>
  )
}

export default ReportPage

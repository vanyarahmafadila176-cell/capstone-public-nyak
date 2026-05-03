function HomePage({ greeting, stats, reports, onCreateReport }) {
  return (
    <section className="screen">
      <header className="header-block">
        <div className="logo">ADUIN</div>
        <h2>{greeting}</h2>
      </header>

      <div className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="card stat">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>

      <button className="btn primary full report-cta" onClick={onCreateReport}>
        + Buat Laporan
      </button>

      <section className="report-list">
        <h3>Riwayat Laporan</h3>
        {reports.map((report) => (
          <article key={`${report.title}-${report.date}`} className="card report">
            <div>
              <strong>{report.title}</strong>
              <p>{report.date}</p>
            </div>
            <span className="status-pill">{report.status}</span>
          </article>
        ))}
      </section>
    </section>
  )
}

export default HomePage

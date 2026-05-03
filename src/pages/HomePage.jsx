import { useState } from "react";

function HomePage({ greeting, stats, reports, onCreateReport }) {
  const [search, setSearch] = useState("");

  // 🔍 SEARCH FIX TOTAL (aman, partial, huruf kecil, dll)
  const filteredReports = reports.filter((r) => {
    const keyword = search.trim().toLowerCase();

    return (
      (r.title || "").toLowerCase().includes(keyword) ||
      (r.status || "").toLowerCase().includes(keyword) ||
      (r.place || "").toLowerCase().includes(keyword)
    );
  });

  return (
    <section className="screen">
      {/* HEADER */}
      <header className="header-block">
        <div className="logo">ADUIN</div>
        <h2>{greeting}</h2>
      </header>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="card stat">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>

      {/* BUTTON */}
      <button className="btn primary full report-cta" onClick={onCreateReport}>
        + Buat Laporan
      </button>

      {/* REPORT LIST */}
      <section className="report-list">
        <div className="report-top">
          <h3>Riwayat Laporan</h3>

          {/* SEARCH */}
          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Cari laporan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* HEADER */}
        <div className="report-head">
          <span>Judul Laporan</span>
          <span>Status</span>
        </div>

        {/* LIST */}
        {filteredReports.length > 0 ? (
          filteredReports.map((r, i) => (
            <article key={i} className="card report">
              <div>
                <strong>{r.title}</strong>
                <p>
                  {r.place} • {r.date}
                </p>
              </div>

              <span className={`status-pill ${r.status?.toLowerCase()}`}>
                {r.status}
              </span>
            </article>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Tidak ada hasil 😢
          </p>
        )}
      </section>
    </section>
  );
}

export default HomePage;
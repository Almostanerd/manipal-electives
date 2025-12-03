export default function Home() {
  return (
    <div className="hero-card">
      <h1 className="hero-title">Elective choosing is a mess, but mat lena tum stress.</h1>
      <p className="hero-subtitle">
        A living, student-built guide for PE & OE selection at Manipal. Understand
        how credits and grades work, explore electives, and see what seniors
        actually say about each course.
      </p>

      <div className="button-row">
        <a href="/guide" className="btn-primary">
          📘 Understand PE/OE & CGPA
        </a>
        <a href="/courses" className="btn-secondary">
          🔍 Browse electives
        </a>
      </div>

      <div className="section" style={{ marginTop: "1.6rem" }}>
        <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
          Built for Manipal students, starting with Computer & Communication.
          Crowdsourced, opinionated, and always a work-in-progress.
        </p>
      </div>

      <div className="section" style={{ marginTop: "1.4rem" }}>
        <p style={{ fontSize: "0.78rem", opacity: 0.7, lineHeight: 1.6 }}>
          <b>Disclaimer:</b> Everything here is based on what my seniors told me-
          most of them from computer-related and circuital branches. Please take
          all of this with a pinch of salt. I got tired of replying to the same
          questions 30 times in DMs, so I turned it into a website instead.
          <br /><br />
          (Slightly ironic that me an introvert who usually just curls up with a
          book on Saturday nights is suddenly being flooded with doubts from
          social butterflies 😭)
          <br /><br />
          <b>PS:</b> If y&apos;all like this, I plan to release a Version 2 with
          consolidated resources, notes and a lot more structured data for
          future batches.
          <br /><br />
          <b>PPS:</b> The list of courses shown here is based on what I saw for
          CCE in SLCM 2.0. I don’t know what the exact lists look like for other
          branches yet.
        </p>
      </div>

      <div style={{ marginTop: "1.4rem", fontSize: "0.78rem", opacity: 0.75 }}>
        Made with love by <b>Mugdha, CCE</b> 💛
      </div>
    </div>
  );
}

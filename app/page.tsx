import Link from "next/link";
import { grades, resources, subjects } from "../lib/resources";

const formatNotes = ["Printable worksheets", "Digital practice", "Answer keys"];

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">FREE K–12 LEARNING RESOURCES</div>
          <h1>Learning materials,<br/><span>assembled smarter.</span></h1>
          <p className="lede">Clear, classroom-ready resources for students, teachers, and families—made to print, practice, and learn from anywhere.</p>
          <div className="actions">
            <Link className="button" href="/resources">Explore free resources <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="/grades">Browse by grade</Link>
          </div>
          <div className="hero-notes" aria-label="Resource benefits">
            {formatNotes.map((note, i) => <span key={note}><b>{["✓","◇","✓"][i]}</b>{note}</span>)}
          </div>
        </div>
        <div className="preview-wrap">
          <div className="preview-accent preview-accent-one">A+</div>
          <div className="preview-accent preview-accent-two">×</div>
          <div className="hero-card">
            <div className="resource-kicker"><span>Featured resource</span><span>Grade 3</span></div>
            <h2>Multiplication Facts 1–10</h2>
            <p className="resource-meta">Math <i/> 15 min <i/> Practice</p>
            <div className="worksheet">
              <div className="worksheet-heading"><span>Quick practice</span><small>Name __________________</small></div>
              {["6 × 7 =","9 × 4 =","8 × 8 ="].map((q,i)=><div className="worksheet-row" key={i}><b>{i+1}.</b><strong>{q}</strong><span></span></div>)}
            </div>
            <div className="card-footer"><div><span className="format-pill">PDF</span><span className="format-pill">DOCX</span></div><Link className="text-link" href="/resources/multiplication-facts-1-to-10">Preview resource →</Link></div>
          </div>
        </div>
      </div>
      <div className="shell hero-bottom"><span>Start with a grade, choose a subject, and find something useful.</span><span aria-hidden="true">↓</span></div>
    </section>
    <section className="shell section">
      <div className="section-head"><div><div className="eyebrow">START WHERE YOU ARE</div><h2>Browse by grade</h2><p>From early learning through high school, find resources matched to the level you need.</p></div><Link className="text-link" href="/grades">All grades →</Link></div>
      <div className="grade-grid">{grades.map(g=><Link href="/resources" className="grade-card" key={g}><small>GRADE</small><strong>{g}</strong></Link>)}</div>
    </section>
    <section className="soft section"><div className="shell">
      <div className="section-head"><div><div className="eyebrow">EXPLORE</div><h2>Subjects for every learner</h2></div><Link className="text-link" href="/subjects">All subjects →</Link></div>
      <div className="subject-grid">{subjects.map((s,i)=><Link href="/resources" className="subject-card" key={s}><span>{["∑","Aa","⚗","⌂","文","</>","♪","+"][i]}</span><strong>{s}</strong><small>Free resources →</small></Link>)}</div>
    </div></section>
    <section className="shell section"><div className="section-head"><div><div className="eyebrow">READY TO USE</div><h2>Featured resources</h2></div><Link className="text-link" href="/resources">View library →</Link></div><div className="resource-grid">{resources.slice(0,3).map(r=><Link className="resource-card" href={"/resources/"+r.slug} key={r.slug}><small>GRADE {r.grade} · {r.subject.toUpperCase()}</small><h3>{r.title}</h3><p>{r.description}</p><div>{r.formats.map(f=><span className="pill" key={f}>{f}</span>)}</div></Link>)}</div></section>
    <section className="shell free-banner"><div><div className="eyebrow">NO PAYWALLS. NO TRIALS.</div><h2>Free means free.</h2><p>Download, print, practice, and learn. SmartAssembly is being built around useful resources that are easy to find and easy to use.</p></div><Link className="button light" href="/resources">Find a resource</Link></section>
  </main>
}
import Link from "next/link";
import { resources } from "../lib/resources";

const formatNotes=["Printable worksheets","Digital practice","Answer keys"];
const gradeGroups=[
 {label:"Elementary",range:"K–5",grades:["K","1","2","3","4","5"]},
 {label:"Middle school",range:"6–8",grades:["6","7","8"]},
 {label:"High school",range:"9–12",grades:["9","10","11","12"]}
];
const subjectCards=[
 {name:"Math",icon:"∑",desc:"Numbers, algebra & geometry"},
 {name:"English & Reading",icon:"Aa",desc:"Reading, writing & vocabulary"},
 {name:"Science",icon:"⚗",desc:"Life, earth & physical science"},
 {name:"Social Studies",icon:"◎",desc:"History, civics & geography"},
 {name:"World Languages",icon:"文",desc:"Language practice & culture"},
 {name:"Computer Science",icon:"</>",desc:"Computing, logic & coding"},
 {name:"Art & Music",icon:"♪",desc:"Creative practice & appreciation"},
 {name:"Health",icon:"+",desc:"Wellness, nutrition & life skills"}
];
const previewMarks=["×","Aa","⚗"];

export default function Home(){return <main>
<section className="hero"><div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/><div className="shell hero-grid">
<div className="hero-copy"><div className="eyebrow">FREE K–12 LEARNING RESOURCES</div><h1>Learning materials,<br/><span>assembled smarter.</span></h1><p className="lede">Clear, classroom-ready resources for students, teachers, and families—made to print, practice, and learn from anywhere.</p><div className="actions"><Link className="button" href="/resources">Explore free resources <span aria-hidden="true">→</span></Link><Link className="text-link" href="/grades">Browse by grade</Link></div><div className="hero-notes">{formatNotes.map((n,i)=><span key={n}><b>{["✓","◇","✓"][i]}</b>{n}</span>)}</div></div>
<div className="preview-wrap"><div className="preview-accent preview-accent-one">A+</div><div className="preview-accent preview-accent-two">×</div><div className="hero-card"><div className="resource-kicker"><span>Featured resource</span><span>Grade 3</span></div><h2>Multiplication Facts 1–10</h2><p className="resource-meta">Math <i/> 15 min <i/> Practice</p><div className="worksheet"><div className="worksheet-heading"><span>Quick practice</span><small>Name __________</small></div>{["6 × 7 =","9 × 4 =","8 × 8 ="].map((q,i)=><div className="worksheet-row" key={q}><b>{i+1}.</b><strong>{q}</strong><span/></div>)}</div><div className="card-footer"><div><span className="format-pill">PDF</span><span className="format-pill">DOCX</span></div><Link className="text-link" href="/resources/multiplication-facts-1-to-10">Preview resource →</Link></div></div></div>
</div><div className="shell hero-bottom"><span>Start with a grade, choose a subject, and find something useful.</span><span>↓</span></div></section>

<section className="shell section"><div className="section-head"><div><div className="eyebrow">START WHERE YOU ARE</div><h2>Browse by grade</h2><p>Choose a school level, then jump straight to the grade you need.</p></div><Link className="text-link" href="/grades">All grades →</Link></div>
<div className="grade-groups">{gradeGroups.map(group=><div className="grade-group" key={group.label}><div className="grade-group-head"><div><strong>{group.label}</strong><span>{group.range}</span></div><small>{group.label==="Elementary"?"Build strong foundations":group.label==="Middle school"?"Grow core skills":"Prepare for what’s next"}</small></div><div className="grade-group-grid">{group.grades.map(g=><Link href="/resources" className="grade-card" key={g}><small>GRADE</small><strong>{g}</strong></Link>)}</div></div>)}</div></section>

<section className="soft section"><div className="shell"><div className="section-head"><div><div className="eyebrow">EXPLORE BY SUBJECT</div><h2>Something for every learner</h2><p>Core subjects and enrichment, organized to make useful practice easy to find.</p></div><Link className="text-link" href="/subjects">All subjects →</Link></div>
<div className="subject-grid">{subjectCards.map(s=><Link href="/resources" className="subject-card" key={s.name}><span className="subject-icon">{s.icon}</span><div><strong>{s.name}</strong><p>{s.desc}</p></div><small>Explore resources <b>→</b></small></Link>)}</div></div></section>

<section className="shell section"><div className="section-head"><div><div className="eyebrow">READY TO USE</div><h2>Featured resources</h2><p>Get a feel for the materials before you download or start practicing.</p></div><Link className="text-link" href="/resources">View library →</Link></div>
<div className="resource-grid featured-grid">{resources.slice(0,3).map((r,i)=><Link className="resource-card visual-resource" href={"/resources/"+r.slug} key={r.slug}><div className="resource-preview"><div className="preview-top"><span>SMARTASSEMBLY</span><span>GRADE {r.grade}</span></div><strong>{previewMarks[i]}</strong><div className="preview-lines"><i/><i/><i/></div></div><div className="resource-card-body"><small>GRADE {r.grade} · {r.subject.toUpperCase()}</small><h3>{r.title}</h3><p>{r.description}</p><div className="resource-card-foot"><div>{r.formats.map(f=><span className="pill" key={f}>{f}</span>)}</div><span>{r.minutes} min</span></div></div></Link>)}</div></section>

<section className="shell free-banner"><div className="free-copy"><div className="eyebrow">NO PAYWALLS. NO TRIALS.</div><h2>Free means free.</h2><p>Useful learning materials should be easy to reach. Browse, download, print, and practice without a subscription.</p><Link className="button light" href="/resources">Find a resource <span>→</span></Link></div><div className="promise-grid"><div><b>01</b><strong>No account required</strong><span>Browse and access resources without creating a student profile.</span></div><div><b>02</b><strong>Print & download free</strong><span>Designed for easy use at home, in class, or wherever learning happens.</span></div><div><b>03</b><strong>Made for K–12</strong><span>One growing library spanning early learning through high school.</span></div></div></section>
</main>}
import Link from "next/link";

export default function Header(){
  return <header className="site-header"><div className="shell nav">
    <Link className="brand" href="/"><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><span>SmartAssembly</span></Link>
    <nav aria-label="Main navigation"><Link href="/grades">Grades</Link><Link href="/subjects">Subjects</Link><Link href="/resources">Resources</Link></nav>
    <Link className="button small" href="/resources">Browse free resources <span aria-hidden="true">→</span></Link>
  </div></header>
}
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";
import Header from "../components/Header";

export const metadata: Metadata={title:"SmartAssembly | Free K–12 Learning Resources",description:"Free printable and digital K–12 learning resources for students, teachers, and families."};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><Header/>{children}<footer className="site-footer"><div className="shell footer-main"><div className="footer-brand"><strong>SmartAssembly</strong><p>Free K–12 learning materials for students, teachers, and families.</p></div><div className="footer-links"><div><b>Explore</b><Link href="/grades">Grades</Link><Link href="/subjects">Subjects</Link><Link href="/resources">Resources</Link></div><div><b>SmartAssembly</b><span>About <em>Coming soon</em></span><span>Accessibility <em>Coming soon</em></span><span>Contact <em>Coming soon</em></span></div></div></div><div className="shell footer-bottom"><span>© 2026 SmartAssembly</span><span>Prototype resources should be reviewed before classroom use.</span><span>Privacy · Terms</span></div></footer></body></html>}
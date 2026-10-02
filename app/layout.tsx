import type { Metadata } from "next";
import "./styles.css";
import Header from "../components/Header";

export const metadata: Metadata = { title: "SmartAssembly | Free K–12 Learning Resources", description: "Free printable and digital K–12 learning resources for students, teachers, and families." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header />{children}<footer><div className="shell footer-inner"><strong>SmartAssembly</strong><span>Free K–12 learning materials for everyone.</span><span>Prototype · Resources should be reviewed before classroom use.</span></div></footer></body></html>; }
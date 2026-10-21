import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sumit Shrivastava",
    default: "Sumit Shrivastava | Freelance Data & AI Consultant",
  },
  description: "Portfolio of Sumit Shrivastava, a Remote Data & AI Consultant specializing in Python, FastAPI, RAG pipelines, and scalable cloud architecture.",
  keywords: [
    "Sumit Shrivastava", 
    "Freelance AI Consultant", 
    "Remote Data Scientist", 
    "FastAPI Developer", 
    "Python Backend Engineer",
    "RAG Pipeline Expert"
  ],
  authors: [{ name: "Sumit Shrivastava" }],
  creator: "Sumit Shrivastava",
  metadataBase: new URL("https://sumitshrivastava.me"),
  openGraph: {
    title: "Sumit Shrivastava | Freelance Data & AI Consultant",
    description: "Portfolio of Sumit Shrivastava, a Remote Data & AI Consultant specializing in Python, FastAPI, RAG pipelines, and scalable cloud architecture.",
    url: "https://sumitshrivastava.me",
    siteName: "Sumit Shrivastava",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#E5E5E5]">
        {children}
      </body>
    </html>
  );
}
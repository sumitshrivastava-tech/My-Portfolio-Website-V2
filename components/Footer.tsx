import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-6 md:px-12 lg:px-20 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-gray-500 text-sm font-medium">
          © 2026 Sumit Shrivastava. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-gray-400 justify-center">
          <Link href="https://github.com/sumitshrivastava-tech" aria-label="GitHub Profile" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/sumitshrivastava-tech" aria-label="LinkedIn Profile" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="https://twitter.com" aria-label="Twitter Profile" target="_blank" className="hover:text-white transition-colors">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}

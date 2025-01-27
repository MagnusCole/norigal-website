import Link from 'next/link';

// Header.tsx (actualizado)
export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 ">
      <h1 className="text-xl font-mono text-white">NORIGAL</h1>
      <nav className="space-x-4">
        <Link href="#comunidad" className="hover:text-cyan-400">Comunidad</Link>
        <Link href="#experimentos" className="hover:text-cyan-400">Experimentos</Link>
        <Link href="#contacto" className="hover:text-cyan-400">Contacto</Link>
      </nav>
    </header>
  );
}

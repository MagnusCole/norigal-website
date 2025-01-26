import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-lg font-bold text-gray-800">Norigal</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/portafolio" className="hover:text-blue-500">Portafolio</Link>
        <Link href="/contacto" className="hover:text-blue-500">Contacto</Link>
      </nav>
    </header>
  );
}

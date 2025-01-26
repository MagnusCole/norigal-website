export default function Footer() {
    return (
      <footer className="text-center p-6 ">
        <p>© {new Date().getFullYear()} <span className="text-white">Norigal</span>. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Hecho con ❤️ por Norigal Team.
        </p>
      </footer>
    );
  }
  
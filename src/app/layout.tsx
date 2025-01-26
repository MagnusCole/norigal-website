import "@/app/styles/globals.css"; // Importa los estilos globales
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

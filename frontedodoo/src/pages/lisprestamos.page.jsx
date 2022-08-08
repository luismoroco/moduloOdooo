import NavBar from "../components/Navbar";
import TablePrestamos from "../components/TablePrestamos";

export default function PrestamosPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <TablePrestamos />
        </div>
      </main>
    </>
  );
}
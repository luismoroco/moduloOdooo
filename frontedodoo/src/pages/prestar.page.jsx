import NavBar from '../components/Navbar';
import Table from '../components/Table';

export default function Prestar() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Table />
        </div>
      </main>
    </>
  );
}
import Form from "../components/FormCliente";
import NavBar from "../components/Navbar";
import TitleDAsh from "../components/TitleDash";
import DashNameOnly from "../components/DashOnly";

export default function ClientesPage() {
  return (
    <>
      <DashNameOnly/>
      <main>
        <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
          <Form/>
        </div>
      </main>
    </>
  );
}
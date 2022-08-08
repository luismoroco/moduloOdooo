import Form from "../components/FormCliente";
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
import Form from "../components/FormCliente";
import DashNameOnly from "../components/DashOnly";
import Subtitle from '../components/Subtitle';
import Tittle from '../components/Title';

export default function ClientesPage() {
  return (
    <>
      <DashNameOnly/>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Subtitle content={'Ingresando un nuevo: '} />
          <Tittle name={'Usuario'} />
          <br/>
          <br/>
          <Form/>
        </div>
      </main>
    </>
  );
}
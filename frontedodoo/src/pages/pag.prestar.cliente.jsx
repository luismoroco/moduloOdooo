import DashOnly from '../components/DashOnly';
import Subtitle from '../components/Subtitle';
import Tittle from '../components/Title';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Label from '../components/Label';
import axios from 'axios';

const divclas = "relative z-0 mb-7 w-full group";
const int = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-cyan-700 focus:outline-none focus:ring-0 focus:border-cyan-800 peer";

const asegu = [
  {id: 1, name: 'Aseguradora 1'},
  {id: 2, name: 'Aseguradora 2'}
];

export default function PrestarDineroCliente() {
  const [idAseg, setAseg] = useState(1);
  const [monto, setMonto] = useState(1600);
  const [meses, setMeses] = useState(12);
  const [abal, setabal] = useState('Carro Hilux 5 Motores');
  const [penalidad, setPen] = useState(120);
  const [interes, setIntere] = useState(46);

  let deudaTotal = monto * (1 + interes / 100) + 100;
  let pagomensual = deudaTotal / meses;

  var date = new Date();
  date.setMonth(date.getMonth() + 1);
  date = date.toISOString().slice(0, 10);

  var dateEnd = new Date();
  dateEnd.setMonth(dateEnd.getMonth() + meses);
  dateEnd = dateEnd.toISOString().slice(0, 10);

  const location = useLocation();
  const history = useHistory();

  const idCliente = location.state.id;
  const name = location.state.name;

  console.log('LOCATION! -> ', idCliente, name);

  const GuardarPrestamo = async (e) => {
    try {
      await axios.post('http://localhost:4001/pres', {
        idAseg, idCliente, monto, meses, abal, penalidad, interes
      }).then(() => alert(`Prestamo Generado!`)).catch((err) => {
        console.log(`error! -> ${err}`);
      });
      history.push('/lispres');
      window.location.reload();
    } catch (err) {
      alert(`Error al registrar el préstamo para ${name}`);
    }
  }

  return (
    <>
      <DashOnly />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Subtitle content={'Generando Prestamo para: '} />
          <Tittle name={name} />

          <br />
          <form onSubmit={GuardarPrestamo}>
            <div className={divclas}>
              <input
                type={'number'}
                required={true}
                value={monto} onChange={(e) => setMonto(e.target.value)}
                className={int} />
              <Label name={'Monto'} />
            </div>

            <div className={divclas}>
              <input
                type={'number'}
                required={true}
                value={meses} onChange={(e) => setMeses(e.target.value)}
                className={int} />
              <Label name={'Meses'} />
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div className={divclas}>
                <input
                  type={'text'}
                  required={true}
                  value={abal} onChange={(e) => setabal(e.target.value)}
                  className={int} />
                <Label name={'Abal'} />
              </div>
              <div className={divclas}>
                <input
                  type={'number'}
                  required={true}
                  value={penalidad} onChange={(e) => setPen(e.target.value)}
                  className={int} />
                <Label name={'Penalidad Mensual'} />
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div className={divclas}>
                <input
                  type={'number'}
                  required={true}
                  value={interes} onChange={(e) => setIntere(e.target.value)}
                  className={int} />
                <Label name={'Interés'} />
              </div>

              <div className={divclas}>
                <select
                  className={int}
                  value={idAseg} onChange={(e) => setAseg(e.target.value)}
                >
                  {asegu.map((e) => (
                    <option value={e.id} > {e.name} </option>
                  ))}
                </select>
                <Label name={'Aseguradora'} />
              </div>

            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:focus:ring-cyan-900"> Generar Préstamo </button>
          </form>

          <br />
          <br />
          <br />
          <br />
          <br />

          <div className='flex flex-row justify-around'>
            <div className='flex flex-col '>
              <Subtitle content={'Deuda Total'} />
              <Tittle name={deudaTotal} />
            </div>
            <div className='flex flex-col'>
              <Subtitle content={'Pago Mensual'} />
              <Tittle name={Math.round(pagomensual)} />
            </div>
            <div className='flex flex-col'>
              <Subtitle content={'Primera Cuota'} />
              <Tittle name={date} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

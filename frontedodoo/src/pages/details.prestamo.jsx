import DashNameOnly from "../components/DashOnly";
import Tittle from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RowDetail from "../components/RowPresDet";
import Caption from "../components/Caption";

const navigation = [
  { name: 'Número de Cuota' },
  { name: 'Fecha de Pago' },
  { name: 'Pago Mensual' },
  { name: 'Capital' },
  { name: 'Estado' },
  { name: 'Acción'}
]

export default function DetailPrestamo() {
  const [odooC, setodooC] = useState([]);
  const [vecdet, setvecdet] = useState([]);

  const location = useLocation();
  const id = location.state.id_p;
  const idC = location.state.id_c;

  console.log('PRES_ID, USER_ID', id, idC);

  useEffect(() => {
    const fetch = async () => {
      await axios.get('http://127.0.0.1:8000/data').then((e) => setodooC(e.data));
      console.log(odooC);
    }
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:4001/pres/${id}`).then((e) => setvecdet(e.data));
      console.log(data);
    }
    fetch();
  }, [vecdet]);

  return (
    <>
      <DashNameOnly />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-1">
          <Subtitle content={'Préstamo de: '} />
          <Tittle name={'User'} />
          <Subtitle content={'Teléfono: '} />
          <Tittle name={'+51'} />
          <br />
          <br />
          
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <Caption title={'Cuotas'} descrip={'Aquí se lista el Cronograma de Pagos del préstamo'} />
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {navigation.map((item) => (
                  <th scope="col" className="py-3 px-6">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vecdet.map((e) => (
                <RowDetail
                  data={e}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}


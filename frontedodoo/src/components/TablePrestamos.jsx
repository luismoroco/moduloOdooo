import React, { useEffect, useState } from "react";
import axios from 'axios';
import Caption from './Caption';
import RowPres from "./RowPres";

const navigation = [
  { name: 'Fecha' },
  { name: 'Monto' },
  { name: 'Meses' },
  { name: 'Abal' },
  { name: 'Penalidad' },
  { name: 'Interés' },
  { name: 'Acción' }
]

export default function TablePrestamos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get('http://localhost:4001/pres');
      setData(x.data);
    }
    fetch();
  }, []);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Caption
          title={'Tus Préstamos'}
          descrip={'Aquí se listan todos los prestamos que hiciste'}
        />
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {navigation.map((item) => (
              <th scope="col" class="py-3 px-6">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <RowPres
              id={e.id}
              idAseg={e.idAseg}
              idClien={e.idCliente}
              fecha={e.fecha_prestamo}
              monto={e.monto}
              meses={e.meses}
              abal={e.abal}
              penal={e.penalidad}
              inter={e.interes}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
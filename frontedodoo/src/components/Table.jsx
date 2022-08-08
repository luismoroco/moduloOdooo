import React, { useEffect, useState } from "react";
import axios from 'axios';
import Caption from './Caption';
import Row from "./Row";

const navigation = [
  {name: 'Nombre'},
  {name: 'Apellidos'},
  {name: 'Dirección'},
  {name: 'Identificación'},
  {name: 'Contacto'},
  {name: 'Correo'},
  {name: 'Acción'}
]

export default function Table() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      const x = await axios.get('http://localhost:4001/clien');
      setData(x.data);
    } 
    fetch();
  }, []);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Caption 
          title = {'Tus Clientes'} 
          descrip = {'Aquí se listan todos tus Clientes'}
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
            <Row
              id={e.id}
              name={e.name}
              ape={e.apellidos}
              dire={e.direccion}
              doc={e.doc_identifi}
              contac={e.contacto}
              correo={e.correo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

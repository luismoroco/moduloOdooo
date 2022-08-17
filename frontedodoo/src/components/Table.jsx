import React, { useEffect, useState } from "react";
import axios from 'axios';
import Caption from './Caption';
import Row from "./Row";

const navigation = [
  {name: 'Nombre'},
  {name: 'Teléfono'},
  {name: 'Email'},
  {name: 'Street'},
  {name: 'Acción'}
]

export default function Table() {
  const [odooC, setodooC] = useState([]);

  useEffect(() =>{
    const fetch = async () => {
      await axios.get('http://127.0.0.1:8000/data').then((e) => setodooC(e.data));    }
    fetch();
  }, []);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Caption 
          title = {'Tus Clientes'} 
          descrip = {'Aquí se listan todos tus Clientes'}
        />
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
          {odooC.map((e) => (
            <Row
              data={e}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

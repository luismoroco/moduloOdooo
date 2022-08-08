import React from "react";
import axios from "axios";

export default function RowPres(props) {
  const { id, fecha, monto, meses, abal, penal, inter } = props;

  const Delete = async (e) => {
    //axios.delete(`http://localhost:5001/re/${e}`).then(() => alert(`Proyecto ${e} eliminado`));
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {fecha}
    </th>
    <td class="py-4 px-6"> {monto} </td>
    <td class="py-4 px-6"> {meses} </td>
    <td class="py-4 px-6"> {abal} </td>
    <td class="py-4 px-6"> {penal} </td>
    <td class="py-4 px-6"> {inter} </td>
    <td class="py-4 px-6 text-right">
      <button class="font-medium text-blue-600 dark:text-sky-100 hover:underline" onClick = {() => {Delete(id)}} > Detalles </button>
    </td>
  </tr>
  );
}
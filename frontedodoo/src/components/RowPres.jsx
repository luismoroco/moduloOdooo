import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

export default function RowPres(props) {
  const { id, idClien, fecha, monto, meses, abal, penal, inter } = props;

  let history = useHistory();

  const VerDetalles = (id, idC) => {
    history.push({
      pathname: '/detailsprestamo',
      state: {
        idPres: id,
        idClien: idC
      }
    });
    window.location.reload();
  } 

  const deletePrestamos = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/del/${id}`);
      alert('OK');
    } catch (err) {
      alert('Error al borrar');
    }
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
    <td class="py-4 px-6 space-x-3">
      <button class="font-medium text-blue-600 dark:text-yellow-500 hover:underline" onClick = {() => {VerDetalles(id, idClien)}} > Detalles </button>
      <button class="font-medium text-blue-600 dark:text-red-500 hover:underline" onClick = {() => {deletePrestamos(id)}} > Borrar </button>
    </td>
  </tr>
  );
}

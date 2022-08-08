import React from "react";
import { useHistory } from "react-router-dom";

export default function Row(props) {
  const { id, name, ape, dire, doc, contac, correo } = props;

  let history = useHistory();

  const Prestamo = (ident, name) => {
    history.push({
      pathname: '/addPrestamo',
      state: {
        id: ident,
        name: name
      }
    });
    window.location.reload();
  }

  const Delete = async (e) => {
    //axios.delete(`http://localhost:5001/re/${e}`).then(() => alert(`Proyecto ${e} eliminado`));
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </th>
      <td class="py-4 px-6"> {ape} </td>
      <td class="py-4 px-6"> {dire} </td>
      <td class="py-4 px-6"> {doc} </td>
      <td class="py-4 px-6"> {contac} </td>
      <td class="py-4 px-6"> {correo} </td>
      <td class="py-4 px-6">
        <button class="font-medium text-blue-600 dark:text-green-500 hover:underline" onClick={() => { Prestamo(id, name) }} > Prestar </button>
      </td>
    </tr>
  );
}
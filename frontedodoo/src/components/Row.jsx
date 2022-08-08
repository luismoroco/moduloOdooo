import React from "react";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/outline";

export default function Row(props) {
  const { id, name, ape, dire, doc, contac, correo } = props;

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
        <button class="font-medium text-blue-600 dark:text-green-500 hover:underline" onClick={() => { Delete(id) }} > Prestar </button>
        {'   '}
        <button class="font-medium text-blue-600 dark:text-red-500 hover:underline" onClick={() => { Delete(id) }} > Eliminar </button>
        {'   '}
        <button class="font-medium text-blue-600 dark:text-yellow-500 hover:underline" onClick={() => { Delete(id) }} > Editar </button>
      </td>
    </tr>
  );
}
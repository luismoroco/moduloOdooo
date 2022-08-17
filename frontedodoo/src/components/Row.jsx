import React from "react";
import { useHistory } from "react-router-dom";

export default function Row({data}) {
  const { id, name, phone, email, street } = data;

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

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </th>
      <td class="py-4 px-6"> {phone} </td>
      <td class="py-4 px-6"> {email} </td>
      <td class="py-4 px-6"> {street} </td>
      <td class="py-4 px-6">
        <button class="font-medium text-blue-600 dark:text-green-500 hover:underline" onClick={() => { Prestamo(id, name) }} > Prestar </button>
      </td>
    </tr>
  );
}
import axios from "axios";

export default function RowDetail({ data }) {
  const { id, num_cuota, fechapago, pago_mensual, capital, estado } = data;

  const pagar = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/pres/${id}`);
      alert('OK');
    } catch (err) {
      alert('Error al pagar');
    }
  } 

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {num_cuota}
      </th>
      <td class="py-4 px-6"> {fechapago} </td>
      <td class="py-4 px-6"> {pago_mensual} </td>
      <td class="py-4 px-6"> {capital} </td>
      <td class="py-4 px-6"> {estado} </td>
      <td class="py-4 px-6">
        <button class="font-medium text-blue-600 dark:text-yellow-500 hover:underline" onClick={() => { pagar(id) }} > Pagar </button>
      </td>
    </tr>
  );
}
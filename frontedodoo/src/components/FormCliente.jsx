import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Label from './Label';

const divclas = "relative z-0 mb-6 w-full group";
const int = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-cyan-700 focus:outline-none focus:ring-0 focus:border-cyan-800 peer";

export default function Form() {
  const [name, setName] = useState('Javier Ramos');
  const [phone, setPhone] = useState('+52 987567435');
  const [street, setStreet] = useState('Av. Panamericaa 610 - Perú');
  const [email, setEmail] = useState('jramirez@gmail.com');

  const history = useHistory();

  const Guardar = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/add', {
        name, phone, street, email
      }).then(() => alert(`Cliente ${name} registrado!`)).catch((err) => {
        console.log(`error! -> ${err}`);
      });
      history.push('/pres');
      window.location.reload();
    } catch (err) {
      alert(`Error al registrar a ${name}`);
    }
  }

  return (
    <form onSubmit={Guardar}>

      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={name} onChange={(e) => setName(e.target.value)}
          className={int} />
        <Label name={'Nombres'} />
      </div>

      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={phone} onChange={(e) => setPhone(e.target.value)}
          className={int} />
        <Label name={'Teléfono'} />
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div className={divclas}>
          <input
            type={'text'}
            required={true}
            value={street} onChange={(e) => setStreet(e.target.value)}
            className={int} />
          <Label name={'Dirección'} />
        </div>
        <div className={divclas}>
          <input
            type={'text'}
            required={true}
            value={email} onChange={(e) => setEmail(e.target.value)}
            className={int} />
          <Label name={'Email'} />
        </div>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:focus:ring-cyan-900"> Guardar </button>
    </form>
  );
}
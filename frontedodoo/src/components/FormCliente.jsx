import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Label from './Label';

const divclas = "relative z-0 mb-6 w-full group";
const int = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-cyan-700 focus:outline-none focus:ring-0 focus:border-cyan-800 peer";

export default function Form() {
  const [name, setName] = useState('');
  const [apellidos, setApe] = useState('');
  const [direccion, setDires] = useState('');
  const [doc_identifi, setDoc] = useState('');
  const [contacto, setCont] = useState('');
  const [correo, setCorreo] = useState('');

  const history = useHistory();

  const Guardar = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4001/clien', {
        name, apellidos, direccion, doc_identifi, contacto, correo
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
          className={int}/>
        <Label name={'Nombres'} />
      </div>
      
      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={apellidos} onChange={(e) => setApe(e.target.value)}
          className={int}/>
        <Label name={'Apellidos'} />
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={direccion} onChange={(e) => setDires(e.target.value)}
          className={int}/>
        <Label name={'Dirección'} />
      </div>
      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={doc_identifi} onChange={(e) => setDoc(e.target.value)}
          className={int}/>
        <Label name={'Identificación'} />
      </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={contacto} onChange={(e) => setCont(e.target.value)}
          className={int}/>
        <Label name={'Contacto'} />
      </div>
      <div className={divclas}>
        <input
          type={'text'}
          required={true}
          value={correo} onChange={(e) => setCorreo(e.target.value)}
          className={int}/>
        <Label name={'Correo'} />
      </div>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:focus:ring-cyan-900"> Guardar </button>
    </form>
  );
}
import DashNameOnly from "../components/DashOnly";
import Tittle from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPrestamo() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [idPres, setIdPres] = useState('');
  const [id, setIdClien] = useState('');

  const location = useLocation();
    setIdPres(location.state.idPres);
    setIdClien(location.state.idClien);
  useEffect(() => {
  }, [location]);

  const getDataCliente = async () => {
    
  }

  return (
    <>
      <DashNameOnly/>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Subtitle content={'Préstamo de: '} />
          <Tittle name={'Usuario'} />
          <br/>
          <br/>


        </div>
      </main>
    </>
  );
}
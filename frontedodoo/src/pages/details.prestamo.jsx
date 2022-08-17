import DashNameOnly from "../components/DashOnly";
import Tittle from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPrestamo() {
  const [odooC, setodooC] = useState([]);
  const [vecdet, setvecdet] = useState([]);

  const location = useLocation();
  const id = location.state.id_p;
  const idC = location.state.id_c;

  console.log('PRES_ID, USER_ID', id, idC);

  useEffect(() => {
    const fetch = async () => {
      await axios.get('http://127.0.0.1:8000/data').then((e) => setodooC(e.data));
      console.log(odooC);
    }
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`http://localhost:4001/pres/${id}`);
      console.log(data);
    }
    fetch();
  }, []);

  return (
    <>
      <DashNameOnly />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-1">
          <Subtitle content={'Préstamo de: '} />
          <Tittle name={'User'} />
          <Subtitle content={'Teléfono: '} />
          <Tittle name={'+51'} />
          <br />
          <br />
        </div>
      </main>
    </>
  );
}
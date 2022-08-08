import { BrowserRouter, Route, Switch } from "react-router-dom";

import IndexPage from "./pages/index.page";
import Prestar from "./pages/prestar.page";
import ClientesPage from "./pages/clientes";
import PrestamosPage from "./pages/lisprestamos.page";
import PrestarDineroCliente from "./pages/pag.prestar.cliente";
import DetailPrestamo from './pages/details.prestamo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {'/'}>
          <IndexPage/>
        </Route>

        <Route path = {'/pres'}>
          <Prestar/>
        </Route>

        <Route path = {'/lispres'}>
          <PrestamosPage/>
        </Route>

        <Route path = {'/addcliente'}>
          <ClientesPage/>
        </Route>

        <Route path = {'/addPrestamo'}>
          <PrestarDineroCliente />
        </Route>

        <Route path = {'/detailsprestamo'}>
          <DetailPrestamo/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";

import IndexPage from "./pages/index.page";
import Prestar from "./pages/prestar.page";
import ClientesPage from "./pages/clientes";

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
        <Route path = {'/cli'}>
          <ClientesPage/>
        </Route>
        <Route path = {'/soli'}>
          <h1> Solicitar </h1>          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

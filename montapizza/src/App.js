import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Montar from './pages/Montar'
import Recomendacoes from './pages/Recomendacoes'
import Tamanho from './pages/Tamanho'
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/Recomendacoes">
            <Recomendacoes />
          </Route>
          <Route path="/Montar">
            <Montar />
          </Route>
          <Route path="/Tamanho">
            <Tamanho />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

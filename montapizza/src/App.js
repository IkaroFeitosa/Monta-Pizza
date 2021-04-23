import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Recomendacoes from './pages/Recomendacoes'
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/Recomendacoes">
            <Recomendacoes />
          </Route>
          <Route path="/Montar">
            <div>
              Montar
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;


import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Color from './Components/Color';
import Home from './Components/Home';
import MostrarNumero from './Components/MostrarNumero';
import MostrarTexto from './Components/MostrarTexto';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route 
            exact
            path="/:texto" 
            render={ (routeProps) => (isNaN(routeProps.match.params.texto)) ? <MostrarTexto {...routeProps} /> : <MostrarNumero {...routeProps} /> }
        />
        <Route exact path="/:texto/:color1/:color2" render={(routeProps) => <Color {...routeProps} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

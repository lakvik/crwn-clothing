import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const HatsPage = () => (<div>Hats page</div>);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

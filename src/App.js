import {BrowserRouter as Router, Route } from 'react-router-dom'
import { CounterButtonPage, HomePage, PeopleListPage } from './pages';
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>

        <Route path="/" exact>
          <HomePage/>
        </Route>

        <Route path="/counter">
          <CounterButtonPage/>
        </Route>

        <Route path="/people-list">
          <PeopleListPage/>
        </Route>

      </Router>
    </div>
  );
}

export default App;

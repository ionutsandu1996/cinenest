import { BrowserRouter as Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* Adăugați mai multe rute pentru paginile de categorie sau video */}
      </Switch>
    </Router>
  );
}

export default App;

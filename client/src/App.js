import './App.scss';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CalendarPage from './components/CalendarPage';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={CalendarPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

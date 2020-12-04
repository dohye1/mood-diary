import './App.scss';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import SettingPage from './components/SettingPage';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/settings" component={SettingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

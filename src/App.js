import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Update from './components/Update';
import Calculation from './components/Calculation';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route path="/calculate">
                <Calculation />
              </Route>
              <Route exact path="/:id">
                <Update />
              </Route>
              
            </Switch>
          </div>
          {/* <Create /> */}
      </div>
    </Router>
  );
}

export default App;

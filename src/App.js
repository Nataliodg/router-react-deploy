import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create-user" component={CreateUser} />
        </div>
      </Router>
        
  );
}

export default App;

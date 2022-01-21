import { Routes, Route} from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
        <div className="App">
          <Routes>
          
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/create-user" element={<CreateUser/>} />
            
          </ Routes>
        </ div>
  );
}

export default App;

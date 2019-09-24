import React from 'react';
import './App.css';
import {Login} from './component/Login.js'
import './component/Login.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Name} from './component/name';
import inicio2 from './component/inicio2';

function App() {
  return (
    <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/miniDrawer" exact component={inicio2} />  
          <Route path="/name" exact component={Name} />      
          
        </div>
      </Router>
  );
}

export default App;

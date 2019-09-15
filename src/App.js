import React from 'react';
import './App.css';
import {Login} from './component/Login.js'
import './component/Login.css'
import MiniDrawer from './component/drawer.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Name} from './component/name';

function App() {
  return (
    <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/miniDrawer" exact component={MiniDrawer} />  
          <Route path="/name" exact component={Name} />      
          
        </div>
      </Router>
  );
}

export default App;

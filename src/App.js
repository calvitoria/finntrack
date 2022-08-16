import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';
import Analytics from './pages/Analytics';

function App() {
  return (
    <main className="main-app">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/analytics" component={ Analytics } />
      </Switch>
    </main>
  );
}

export default App;

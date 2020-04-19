import React from 'react';
import './App.css';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AboutPage} />
      <Route path="/portfolio" component={PortfolioPage} />
    </Router>
  );
}

export default App;

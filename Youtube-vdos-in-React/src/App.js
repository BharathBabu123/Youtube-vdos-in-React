import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Youtube from './youtube/Youtube';
import Nav from './youtube/Nav';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
        
		<Router>
        <div className="links">
           <Link to ="/nav">Nav</Link><br/>
           <Link to = "/youtube">youtube</Link><br/>
        </div>
          <hr/>
        <Router path ="/" component={Nav}/>
        <Route path="/nav" component={Nav}/>
        <Route  path="/youtube" component={Youtube}/>
      </Router>
    </div>
  );
}

export default App;

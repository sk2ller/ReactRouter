import React , { Component }from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About'; 
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component{


  render()
  {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/Contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
  }
}

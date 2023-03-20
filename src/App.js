import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";
import {Navigate} from "react-router-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';
import {About} from './components/about';
import {Expertise} from './components/expertise';
import {Contact} from './components/contact';
import './components/header.css'
import './components/about.css'
import './components/expertise.css'
import './components/contact.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Expertise></Expertise>
      <Contact></Contact>
    </div>
  );
}

export default App;

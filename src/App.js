import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";
import {Navigate} from "react-router-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';
import {About} from './components/about';
import {Expertise} from './components/expertise';
import {Contact} from './components/contact';
import {Earplugs} from './components/3MEarplugs';
import {Footer} from './components/footer';
import './components/header.css'
import './components/about.css'
import './components/expertise.css'
import './components/contact.css'
import './components/footer.css'

function App() {
  document.title = "American Compo"
  return (
    <BrowserRouter>   
    <div className="App">
    <Header></Header>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/paraquat" element={<Earplugs/>}/>
        </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
 
  );
}

export default App;

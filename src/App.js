// import react from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import "./components/Header/Header.css";
import Header from './components/Header/Header.js';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App(props) {

  const handleScroll = (e) => {
  }

  return (
    <div >
        <div className="styleHeader" onScroll={handleScroll}>
            <div className="bgr-wrap">
              <Container>
                <Header name="Anna" color="red"/>
              </Container>
            </div>
        </div>
    
          <Routes>
                <Route path='/' exact Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/service' Component={Service}/>
                <Route path='/project' Component={Project}/>
                <Route path='/contact' Component={Contact}/>
          </Routes>
        {/* <Main userName="Mack" num={5}/> */}
        {/* <Sidebar/> */}

    </div>  
    
  )

}

export default App;


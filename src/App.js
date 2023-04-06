import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// BrowserRouter => Router Container
// Routes => switch
// Route => case => path and element(component)

import Menu from './component/Menu';
import Home from './component/Home'
import About from './component/About';
import Resume from './component/Resume';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Pnf from './component/pnf';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
        <Menu />

        <Routes>
          <Route path = {'/'} element = {<Home />} />
          <Route path = {'/about'} element = {<About />} />
          <Route path = {'/resume'} element = {<Resume />} />
          <Route path = {'/projects'} element = {<Projects />} />
          <Route path = {'/contact'} element = {<Contact />} />
          <Route path = {'/*'} element = {<Pnf />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App;

import './App.css';
import Main from './components/Main/Main'
import Photos from './components/Photos/Photos';
import Header from './components/Header/Header'
import Resume from './components/Resume'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Projects from './components/Projects/Projects'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Header class = "Headername"/>
     
      <div class="wrapper">
     
        <div class="main">
        <Routes>
            <Route path ="/" element = {<Main/>} />
            <Route path ="/projects" element = {<Projects/>} />
            <Route path ="/resume" element = {<Resume/>} />
            <Route path ="/blog" element = {<Blog/>} />
            <Route path ="/contact" element = {<Contact/>} />

          </Routes>
        </div>
        
        <div class = "sidebar">
            <Link to="/"><p>main</p></Link>
            <Link to ="/projects"><p>projects</p></Link>
            <Link to = "/resume"><p>resume</p></Link>
            <Link to="/blog"><p>articles</p></Link>
            <Link to="/contact"><p>contact</p></Link>
        </div>
        
      </div>
      </Router>
    </>
  );
}

export default App;
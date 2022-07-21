import './App.css';
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Header class = "Headername"/>
      <div class="wrapper">
        
        <div class="main">
        </div>

        <div class = "sidebar">
            <p>main</p>
            <p>projects</p>
            <p>resume</p>
            <p>blog</p>
            <p>photos</p>
            <p>contact</p>
        </div>
        
      </div>
    </>
  );
}

export default App;
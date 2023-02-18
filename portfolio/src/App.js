
import './App.css';
import personPhoto from "./images/result.png"
import splashScreen from "./images/splash.png"

function App() {
  return (
    <div className="container">
      <nav>
        <div className='logo'> LEAD EN<b>G</b>INEER </div>

        <ul className='nav-items'>
          <li><a href='#'> HOME </a></li>
          <li><a href='#'> ABOUT </a></li>
          <li><a href='#'> SKILLS </a></li>
          <li><a href='#'> BLOG </a></li>
        </ul>

      </nav>

      <div className='wrapper'>
        <div className='cols cols0'>
          <span className='topline'>Hello</span>
          <h1>I'm <span className='multiText'> Coder</span></h1>
          <p>Lorem ipsum dolor sit amet, consecttetur adipising elit.</p>
          <div className='btns'>
          <button> Download CV </button>
          <button> Hire Me </button>
        </div>
        </div>
        
        

        <div className='cols cols1'>
          <div className='imgbox'>
            <img src={splashScreen} id = "splash"/>
            <img src={personPhoto}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

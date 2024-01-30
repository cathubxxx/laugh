import './App.css';
import logo from './assets/logo.png';
import tg from './assets/telegram.svg';
import tw from './assets/twitter.svg';
import left from './assets/left.png';
import right from './assets/right.png';
import video from './assets/video.mp4'
import runR from './assets/runR.png';
import runL from './assets/runL.png';

function App() {

  const ticker = "$LAUGH";

  return (
    <div className="App">
      <div className="insideApp">
        <img className="logo" alt="logo" src={logo}/>
        <div className="main">
          <div className="left mainImg">
            <img className="laughL img" alt="Laugh" src={left}/>
          </div>
          <div className="vidBlock">
          <video controls autoPlay loop className="video">
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="socialBlock">
          <img className="social" alt="telegram" src={tg}/>
          <img className="logo" alt="twitter" src={tw}/>
        </div>
          </div>
          <div className="right mainImg">
            <img className="laughL img" alt="Laugh" src={right}/>
          </div>
        </div>
        <div className="buttonBlock">
          <button className="button">BUY {ticker}</button>
        </div>
        <div className="runningBlock">
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runR}/></div>
          <div className="imgBlock"><img alt="laugh" className="smallRun" src={runL}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;

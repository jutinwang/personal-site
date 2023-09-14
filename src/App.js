import './App.css';
import Headshot from './components/headshot';
import Header from './components/header';
import Description from './components/Description';
import Slideshow from './components/Slideshow';
import External from './components/External';

function App() {
  return (
    <div className="App">
      <div className="Headbackground">
        <div className="headInfo">
          <Headshot />
          <Header />
        </div>
      </div>
      {/* <Description /> */}
      <Slideshow />
      <External />
    </div>
  );
}

export default App;

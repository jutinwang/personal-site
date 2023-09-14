import './App.css';
import Headshot from './components/headshot';
import Header from './components/header';
import Description from './components/Description';
import Slideshow from './components/Slideshow';
import External from './components/External';

function App() {
  return (
    <div className="App">
      <div className="headInfo">
        <Headshot />
        <Header />
      </div>
      <External />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Description from './components/Description';
import Resume from './components/Resume';
import Slideshow from './components/Slideshow';
//import External from './components/External';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Resume />
      <Slideshow />
    </div>
  );
}

export default App;

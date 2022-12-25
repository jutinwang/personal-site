import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Description from './components/Description';
import Resume from './components/Resume';
import Slideshow from './components/Slideshow';
import External from './components/External';

function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <Slideshow />
      <External />
    </div>
  );
}

export default App;

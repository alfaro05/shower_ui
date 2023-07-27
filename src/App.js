import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import { BodyContents } from './Components/Contents';
import { NavBar } from './Components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src="/underground.png" width="50%"/>
          <h1>¡YA CASI VIENE LEO!</h1>
        </header>
        <NavBar/>
        <BodyContents/>
      </div>
    </BrowserRouter>
  );
}

export default App;

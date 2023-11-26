import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Sidebar/>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;

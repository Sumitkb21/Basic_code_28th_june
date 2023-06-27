import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Pricing from './components/pricing';
import Feature from './components/feature';


function App() {
  return (
   <Routes>
    
    <Route  path="/" element= {<Home/>}/>;
    <Route path="/pricing" element= {<Pricing/>}/>;
    <Route path="/feature" element= {<Feature/>}/>;
    
   </Routes> 
   
  );

}

export default App;

import './App.css';
import {Navbar, Info, Testimonials, Images, Footer} from './components'
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
     <Router>
       <Navbar/>
       <Info/>
       <Testimonials/>
       <Images/>
       <Footer/>
     </Router>
  
  );
}



export default App;

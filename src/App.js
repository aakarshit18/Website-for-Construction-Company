import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services';
import ContactUs from './components/contact-us';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/contact-us' component={ContactUs}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Navbar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Pizza from './components/Pizza';
//import Header from './components/Header';
//import Cart from './components/Cart';
//import { Col, Row } from 'react-bootstrap';
//import CardPizza from './components/CardPizza';
//import Register from './components/Register';


function App() {


  return (
    <>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      {/*<Header></Header>*/}
      {/*<Register></Register> */}
      {/*<Login></Login> */}
      {/*<Cart></Cart>*/}
      <Pizza></Pizza>
      <Footer></Footer>
    </>
  )
}

export default App
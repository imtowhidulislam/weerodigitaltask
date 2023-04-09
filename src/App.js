import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import { Navbar,Home,About,Contact,Booking,Product,Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<Booking />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

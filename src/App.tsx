import './App.css'
import FibonacciSeq from './components/FibonacciSeq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeriesHeader from './components/SeriesHeader';
import CollatzConjecture from './components/CollatzConjecture';
import Navbar from './components/Navbar';
export default function App() {
  return ( 
    <Router>
      <div>
        <SeriesHeader title="Sequences!" />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<FibonacciSeq />}/>
        <Route path="/collatz" element={<CollatzConjecture />} />
      </Routes>
    </Router>
  )
}
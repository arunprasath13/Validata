import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-right" />
      <Routes>

        <Route path="/" element={<Forms />} />

      </Routes>
    </Router>
  );
}

export default App;

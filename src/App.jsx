import Home from './pages/Home'
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import base from './basename';

function App() {
  return (
    <>
      <Router basename={base}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

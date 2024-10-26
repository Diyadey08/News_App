import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Newsbox from './components/Newsbox'
function App() {
  
  return (
    <>
    <Router>
      <Nav/>
      
        <Routes>
          <Route path="/" element={<Newsbox type='all' />} />
        </Routes>
        <Routes>
          <Route path="/sports" element={<Newsbox type='sports' />} />
        </Routes>
        <Routes>
          <Route path="/health" element={<Newsbox type='health' />} />
        </Routes>
        <Routes>
          <Route path="/science" element={<Newsbox type='science' />} />
        </Routes>
        
      </Router>
    
    </>
  )
}

export default App

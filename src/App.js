import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage'
import MintPage from './pages/MintPage'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/minting" element={<MintPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

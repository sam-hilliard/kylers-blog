import './App.css';
import NavMenu from './Components/NavMenu/NavMenu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './Pages/LandingPage/LandingPage'
import BlogPage from './Pages/BlogPage/BlogPage';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="art" element={<BlogPage />} />
            <Route path="photography" element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
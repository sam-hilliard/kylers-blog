import './App.css';
import NavMenu from './Components/NavMenu/NavMenu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './Pages/LandingPage/LandingPage'
import BlogPage from './Pages/BlogPage/BlogPage';
import AboutPage from './Pages/AboutPage/AboutPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="art" element={<BlogPage title="Art" />} />
            <Route path="photography" element={<BlogPage title="Photography" />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
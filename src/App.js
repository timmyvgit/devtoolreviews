import Navbar from './components/Navbar'
// import Login from "./components/Login"

import Reviews from "./pages/Reviews"
import Chat from "./pages/Chat"
import Forum from "./pages/Forum"
import Career from "./pages/Career"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
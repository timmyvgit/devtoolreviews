
import Navbar from './components/Navbar'
import Reviews from "./pages/Reviews"
import ChatPage from "./pages/ChatPage"
import ForumPage from "./pages/ForumPage"
import Career from "./pages/Career"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
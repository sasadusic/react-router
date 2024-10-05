import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Post from "./pages/Post"
import NotFound404 from "./pages/404"
import { useState } from "react"

function App() {

  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter basename="reactRouter">
    <div className="App">
      <Header login={login} setLogin={setLogin} />
    </div>
    <div className="cont">

    <Routes >
    <Route path="/" Component={Home} />
    <Route path="/about" element={login ? <About /> : <Navigate to="/" />} />
    <Route path="/profile" element={login ? <Profile login={login} /> : <Navigate to="/" />} />
    <Route path="/post/:id" Component={Post} />
    <Route path="*" Component={NotFound404} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

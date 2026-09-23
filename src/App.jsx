import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Coaching } from "./pages/Coaching/Coaching"
import { Resources } from "./pages/Resources/Resources"
import { Nav } from "./layout/Nav"
function App() {

  return (
    <>  
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>


    </>
  )
}

export default App

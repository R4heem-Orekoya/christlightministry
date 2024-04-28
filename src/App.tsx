import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Sermon from "./Pages/Sermon"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Scrolltotop from "./components/Scrolltotop"
import Map from "./components/Map"
import { useContext } from "react"
import { Context } from "./context/MapContext"

const App = () => {
  const { isMapOpen } = useContext(Context)
  return (  
    <>
      <Scrolltotop />
      {isMapOpen && <Map />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sermon" element={<Sermon />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

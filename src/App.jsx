import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { Contact } from "./routes/Contact"
import { About } from "./routes/About"

const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/About" element={ <About></About> }></Route>
        <Route path="/Contact" element={ <Contact></Contact> }></Route>
      </Routes>

    </>
    
  )
}

export default App
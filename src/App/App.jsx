import './App.css'

import TopMenu from 's/components/TopMenu/TopMenu.jsx'

import Home from "./sections/Home/Home.jsx"
import About from "./sections/About/About.jsx"
import People from "./sections/People/People.jsx"

function App() {
  return (
    <>
        <TopMenu />
        <Home />
        <About />
        <People />
    </>
  )
}

export default App

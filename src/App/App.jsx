import './App.css'
import { useState } from 'react'

import TopMenu from 's/components/TopMenu/TopMenu.jsx'

function App() {
  return (
    <>
      <TopMenu />

      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

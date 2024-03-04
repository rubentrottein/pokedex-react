import { useState } from 'react'
import './App.css'
import PresentationPokedex from './components/PresentationPokedex/PresentationPokedex'
function App() {

  return (
    <>
      <PresentationPokedex />
      <PokemonStarters />
    </>
  )
}

export default App

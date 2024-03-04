import { useState } from 'react'
import './App.css'
import PresentationPokedex from './components/PresentationPokedex/PresentationPokedex'
import PokemonStarters from "./components/PokemonStarters/PokemonStarters"
import PokemonList from "./components/PokemonList/PokemonList"
function App() {

  return (
    <>
      <PresentationPokedex />
      <main>
        <PokemonStarters />
        <PokemonList />
      </main>
    </>
  )
}

export default App

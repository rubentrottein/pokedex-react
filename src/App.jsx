import { useState } from 'react'
import './App.css'
import PresentationPokedex from './components/PresentationPokedex/PresentationPokedex'
import PokemonStarters from "./components/PokemonStarters/PokemonStarters"
import PokemonList from "./components/PokemonList/PokemonList"
import PokemonSearch from "./components/PokemonSearch/PokemonSearch"
function App() {

  return (
    <>
      <PresentationPokedex />
      <aside>
        <PokemonSearch />
      </aside>
      <main>
        <PokemonStarters />
        <PokemonList />
      </main>
    </>
  )
}

export default App

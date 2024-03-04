import starters from "../OfflinePokedex/starters"
import PokemonCard from "../PokemonCard/PokemonCard"
import classes from "./PokemonStarters.module.css"
export default function PokemonStarters(){
    return(
        <section className={classes.starters} id="starters">
            <h2>Starters Pokemon</h2>
            {starters.map(starter=>{
                return(
                <article key={starter.generation}>
                    <h3>{starter.generation}</h3>
                    <aside>
                        {starter.pokemons.map(actualPokemon => 
                            <PokemonCard key={actualPokemon.id} pokemon={actualPokemon} 
                        />)}
                    </aside>
                </article>
                )
            })}
        </section>
    )
}
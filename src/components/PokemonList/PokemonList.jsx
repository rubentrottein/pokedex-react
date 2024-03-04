import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
export default function PokemonList(){
    const [dataSet, setDataSet] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon")
            let data = response.json()
            setDataSet(data)
        })()
    },[])
    return (
        <section id="list">
            <h2>Pokemon List</h2>
            <article>
                {/*
                    dataSet.map(actualPokemon=>(<PokemonCard pokemon={""} />))
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                */}
                <p>{
                    console.log(dataSet[0].id)
                }</p>
            </article>
        </section>
    )
}
import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import classes from "./PokemonList.module.css"

export default function PokemonList() {
    const [displayList, setDisplayList] = useState(false);
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
                const data = await response.json();
                setDataSet(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="list">
            <h2>FULL Pokemon List</h2>
            <button
                onClick={()=>{ 
                    setDisplayList(!displayList)
                }}
            >Afficher la liste complète des 868 pokemons</button>
            {displayList && 
            <article className={classes.list}>
                {dataSet.map(pokemon => (
                    <PokemonCard list={true} key={pokemon.id} pokemon={pokemon} />
                ))}
            </article>
            }
        </section>
    );
}

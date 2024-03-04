import { useEffect, useState } from "react"
import classes from "./PokemonCard.module.css"
export default function PokemonCard(props){
    
    return(
        <figure className={classes.card}>
            <img src={props.pokemon.image} alt={"Image de " + props.pokemon.name} />
            <figcaption>
                <h3>{props.pokemon.name}</h3>
            </figcaption>
        </figure>
    )
}
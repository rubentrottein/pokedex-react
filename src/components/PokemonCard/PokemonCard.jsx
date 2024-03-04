import { useEffect, useState } from "react"
import classes from "./PokemonCard.module.css"
export default function PokemonCard(props){
    return(
        <figure className={classes.card}>
            <img src={props.pokemon.image} alt={"Image de " + props.pokemon.name} />
            <figcaption>
                <h3>{props.pokemon.name}</h3>
                {Object.keys(props.pokemon.apiTypes).map((type) => (
                    <li key={type}>
                        <span>{type}</span>
                        <span> {props.pokemon.stats[type]}</span>
                    </li>
                ))}
                {/**
                <div className={classes.types}>
                    <img src={props.pokemon.apiTypes[0].image} />
                    <p>{props.pokemon.apiTypes[0].name}</p>
                    <img src={props.pokemon.apiTypes[1].image} />
                    <p>{props.pokemon.apiTypes[1].name}</p>
                </div>
                */}
                {     
                    Object.keys(props.pokemon.stats).map((stat) => (
                    <div key={stat} className={classes.stats}>
                        <p>{stat}</p>
                        <p className={classes.jauge} style={{width:`${props.pokemon.stats[stat]}%`}}> {props.pokemon.stats[stat]}</p>
                    </div>
                    ))
                }
            </figcaption>
        </figure>
    )
}
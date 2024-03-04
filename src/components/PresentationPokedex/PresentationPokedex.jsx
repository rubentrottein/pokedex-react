import Presentation from "./Presentation"
import Inscription from "./Inscription"
import classes from "PresentationPokedex.module.css"
export default function PresentationPokedex(){
    
    return (
        <header className={classes.presentation}>
            <h1>Pokedex</h1>
            <Presentation />
            <Inscription />
        </header>
    )
}
import Presentation from "./Presentation"
import Inscription from "./Inscription"
import classes from "./PresentationPokedex.module.css"
export default function PresentationPokedex(){
    
    return (
        <header className={classes.presentation}>
            <div>
                <h1>Pokedex</h1>
                <nav>
                    <a href="#starters">Starters</a>
                    <a href="#list">List</a>
                </nav>
            </div>
            <Presentation />
            <Inscription />
        </header>
    )
}
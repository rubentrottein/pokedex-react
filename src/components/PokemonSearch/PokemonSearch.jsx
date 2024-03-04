import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
export default function PokemonSearch(){
    const [dataSet, setDataSet] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [searchedPokemon, setSearchedPokemon] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
                const data = await response.json();
                setDataSet(data);
            } catch (error) {
                console.error("Erreur de récupération des données:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <section>
            <h2>Recherche par nom</h2>
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                const formData = new FormData(e.target)
                //setPokemonName(formData.get("search"))
                dataSet.filter(singleData => {
                    setSearchedPokemon(singleData)
                    singleData.name == formData.get("search")
                })
            }}
            >
                <input type="search" name="search" id="search" autoComplete="true" />
            </form>
            {searchedPokemon && <PokemonCard pokemon={searchedPokemon} />}
        </section>
    )
}
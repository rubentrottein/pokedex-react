import { useEffect, useState } from "react";
export default function PokemonSearch(){
    const [dataSet, setDataSet] = useState([])
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
}
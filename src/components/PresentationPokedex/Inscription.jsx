import { useState } from "react";
export default function Inscription(){
    const [inscription, setInscription] = useState(false);
    const [userName, setUserName] = useState("");
    return (

        <form action=""
        onSubmit={(e)=>{
            e.preventDefault()
            let formData = new FormData(e.target)
            setInscription(true)
            setUserName(formData.get("email"))
        }}>
            {inscription ? 
                <p style={{color : "chartreuse"}}>Bienvenue, vous êtes inscrit avec l'email : {userName}</p>
                :
                <p style={{color : "white"}}>Inscrivez vous à la NewsLetter! : {userName}</p>
            }
            <input type="email" name="email" id="email" placeholder="Entrez votre Email"/>
            <button>S'inscrire</button>
        </form>
    )    
}
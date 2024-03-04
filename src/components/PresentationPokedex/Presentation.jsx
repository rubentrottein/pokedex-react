export default function Presentation(){
    let presentation = [
        {title: "", info:`Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime! Que vous
        soyez un Maître Pokémon en devenir ou simplement curieux de découvrir chaque
        créature unique, notre base de données complète est votre porte d'entrée vers
        une aventure extraordinaire. Explorez les caractéristiques, les forces, et les
        faiblesses de chaque Pokémon, plongez dans leur univers, et devenez l'expert
        ultime.`}
        {title : `Recherche Instantanée par Nom:`, info:`Ne perdez plus jamais de temps à chercher votre Pokémon préféré. Entrez simplement son nom pour accéder instantanément à une
        mine d'informations.`},
        {title : `Fiches Détaillées:`, info:`Chaque Pokémon est unique, et notre Pokedex célèbre cette
        diversité.`},
        {title : `Toujours Plus à Découvrir:`, info:`Nous nous engageons à enrichir constamment le
        Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à l'affût!`}
    ]
    return(
        <article>
            <h2>Fonctionnalités</h2>
            {presentation.map(fonctionnalite =>{
                <li key={presentation.title}>
                    <h3>{presentation.title}</h3>
                    <p>{presentation.info}</p>
                </li>
            })}
        </article>
    )
} 
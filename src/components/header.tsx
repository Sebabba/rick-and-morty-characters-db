import type { JSX } from 'react';
import headerCharaters from "../images/headerCharacters.png"
import headerLocations from "../images/headerLocations.png"
import headerEpisodes from "../images/headerEpisodes.png"

type CardProps = {
    imageName: string;
};

export default function Header({ imageName }: CardProps): JSX.Element{
    let image:string = ""

    if(imageName == "characters")
        image = headerCharaters.src
    else if(imageName == "locations")
        image = headerLocations.src
    else if(imageName == "episodes")
        image = headerEpisodes.src

    return(
        <header>
            <img src={image} className='header-image' alt={imageName}/>
        </header>
    )
}
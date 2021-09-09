import React from 'react';
import './HeaderArtist.css'

interface HeaderArtistProps{
   name: string;
   img: string;
}

export const HeaderArtist: React.FC<HeaderArtistProps> =(props: HeaderArtistProps) => {

   let className = 'headerArtist';

   return <div className={className}>
            <img src={props.img} alt="..." />

            <div>
               <p>Similar to</p>
               <p className = {className+`--name`} >{props.name}</p>
            </div>
         </div>
}
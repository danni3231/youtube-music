import React from 'react';
import './Artist.css'

interface ArtistProps{
   name: string;
   img: string;
   subscribers: string;
}

export const Artist: React.FC<ArtistProps> =(props: ArtistProps) => {

   let className = 'artist';

   return <div className={className}>
            <img src={props.img} alt="..." />

            <div>
               <p className = {className+`__name`}> {props.name}</p>
               <p className = {className+`__description`}>{props.subscribers+ " subscribers"}</p>
            </div>

         </div>
}
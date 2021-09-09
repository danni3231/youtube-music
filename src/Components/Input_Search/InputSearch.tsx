import React from 'react';
import './InputSearch.css'

interface InputSearchProps{
   hint: string;
   active: boolean;
}

export const InputSearch: React.FC<InputSearchProps> =(props: InputSearchProps) => {

   let className = 'inputSearch';
   if (props.active){
      className += 'inputSearch--active';
   }

   return <div className ="inputSearch">
            <img src='https://viajarconmusica.com/wp-content/themes/sitiosGrupoPeriscopio/images/lupa-blanca-png-2.png' alt="..." />
            <input className={className} type="text" placeholder={props.hint} />
         </div> 
  
}
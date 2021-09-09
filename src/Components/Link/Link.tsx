import React from 'react';
import './Link.css';

interface LinkProps{
   text: string;
   active?: boolean;
   url: string;
}

export const Link: React.FC<LinkProps> = (props: LinkProps) => {

   let className = 'link';
   if (props.active){
      className += ' link--active';
   }

   return <a className={className} href={props.url}>
            {props.text}
         </a>;
}
import React from 'react';
import './Album.css'

interface AlbumProps{
   name: string;
   img: string;
   explicit: boolean;
   artist: string;
}

export const Album: React.FC<AlbumProps> =(props: AlbumProps) => {

   let className = 'album';
   let explicit = className+"__explicit"
   if (props.explicit){
      explicit += " "+explicit+"--active"
   }

   return <div className={className}>
            <img src={props.img} alt="..." />

            <div>
               <p className = {className+`__name`}> {props.name}</p>
               <div className = {className+`__info`}> 
                  <img className={explicit} 
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAAAwMDDCwsJ0dHTg4OCGhoY6Ojr7+/vz8/O+vr67u7uKioq5ublaWlrIyMhUVFTW1tYLCwtGRkYtLS1LS0uUlJRmZmaqqqpQUFA3rvJ9AAACQ0lEQVR4nO3dj1KCQBCA8Usr4o8IqJXv/6KN40xNprHsnexyft8LtL8RweNSQiAiIiIiIiIiIiIiIlpaZdV0xcpDRddUZXJffXzy1a5O6tusrEFX2m+S+crWGnOjNtGx2g/WkpsNfQrg1prxb9t4YG9tGCn6VSz9HqLnhtj3oteTzE9tHHBjPb+guIvG3np8QasYYG09vaiYTzcH6+FFHfTA0np2YfrTaWU9urBKLWysRxfWqIWd9ejCOrWwsB5dWKEWelwVXkt/RUToJYQI/YcQof8QIvQfQoT+Q4jQfwjTC9tnXdptoPmF2m1L7Wbs/MK18u+tESJEiBAhQoQIESJEiBAhwrDsFfDb++t4zceShXe9qeVCeNd/PkKIcHoIU4cQ4fQQpg4hwukhTB1ChNN7SGH2K+DwIulzyUJR+d9rQ4gQIUKECBEiRIgQIUKE2QuzX+Pnf5/mAe61IYwKIcLpIUwdQoTTQ5g6hAinhzB1CGcR5r8Czv77FrKW/J0ZWYu+14YQIUKECBEiRIgQIUKECP+U/+8m5v/bl3OHEKH/ECL0H0KE/kOI0H8IEfoPIUL/6YX5P0s2/+cB5/9M5/yfy53/s9XDwXp2UQc9MNTWw4uqI4Rhbz29IP3V8NTGenxBUS9hCNrNkvlq44ChHKwFIw0RJ9JzvTVhpD4WqN+2nCftZuyver8H6pDgFTxVej3dtNHvwe9qjyvFfeRl4tJ4tAZdtEvrO1VWTVesPFR0TZXu+CQiIiIiIiIiIiIiIpqrLxcZb3OexCVHAAAAAElFTkSuQmCC"
                     alt="" />
                  <p>{props.name + " . " +props.artist}</p>
               </div>
            
            </div>
         </div>
}


import React from 'react';
import './App.css';
import { InputSearch } from '../Input_Search/InputSearch';
import {Link} from '../Link/Link';
import {HeaderArtist} from '../HeaderArtist/HeaderArtist';
import { Album } from '../Album/Album';
import { Artist } from '../Artist/Artist';

function App() {
  return (
    <div className="App">
      <header className="App__header">

        <img src="..." alt="..." />

        <nav className="App__nav">
          <Link
            text="Home"
            url=""
            active />
          <Link
            text="Explore"
            url=""/>
          <Link
            text="Library"
            url=""/>
          <InputSearch
            hint= "string"
            active= {false}/>

        </nav>

        <img src="" alt="..." />

      </header>

      <main>

        <section className="App__list">
          
          <HeaderArtist name="Joji" img= "https://www.mor.bo/wp-content/uploads/2020/09/nectar.jpg"/>

          <div className="App__list__gallery">
            <Album name="after hour" artist="the Weeknd" explicit={false} img="https://lh3.googleusercontent.com/JDKz3Anlyo49xBhFcFx13QD_Tk4-kqdiYTo15gtkL93nE8biWyZ7o0BPyW6RnXVxcXaJ5DgU5nJ_0NjJ=w544-h544-l90-rj"/>
            <Artist name="Jose Madero" img="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/e/a/b/ceabcbb3f29ed18a12dab89a317862b4.jpg" subscribers="3.5m"/>
            <Artist name="Blackbear" img="https://myipop.net/wp-content/uploads/2020/08/everything-means-nothing.jpg" subscribers="4.5m"/>
            <Album name="after hour" artist="the Weeknd" explicit={false} img="https://lh3.googleusercontent.com/JDKz3Anlyo49xBhFcFx13QD_Tk4-kqdiYTo15gtkL93nE8biWyZ7o0BPyW6RnXVxcXaJ5DgU5nJ_0NjJ=w544-h544-l90-rj"/>
          </div>

        </section>

        <section className="App__list">
          
          <h1>your favorites</h1>

          <div className="App__list__gallery">
            <Artist name="Jose Madero" img="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/e/a/b/ceabcbb3f29ed18a12dab89a317862b4.jpg" subscribers="3.5m"/>
            <Album name="after hour" artist="the Weeknd" explicit={false} img="https://lh3.googleusercontent.com/JDKz3Anlyo49xBhFcFx13QD_Tk4-kqdiYTo15gtkL93nE8biWyZ7o0BPyW6RnXVxcXaJ5DgU5nJ_0NjJ=w544-h544-l90-rj"/>
            <Artist name="Blackbear" img="https://myipop.net/wp-content/uploads/2020/08/everything-means-nothing.jpg" subscribers="4.5m"/>
            <Album name="after hour" artist="the Weeknd" explicit={false} img="https://lh3.googleusercontent.com/JDKz3Anlyo49xBhFcFx13QD_Tk4-kqdiYTo15gtkL93nE8biWyZ7o0BPyW6RnXVxcXaJ5DgU5nJ_0NjJ=w544-h544-l90-rj"/>
          </div>

        </section>

      </main>



    </div>
  );
}

export default App;

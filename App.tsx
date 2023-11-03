import "./App.css";
import { TitreCv } from "./Components/TitreCv";
import { Titredelapage } from "./Components/Titrepage";
import { Adr } from "./Components/Adr";
import { Age } from "./Components/Age";
import { Bday } from "./Components/Bday";
import { Autre } from "./Components/Autre";
import { Diplome } from "./Components/Diplome";
import { Email } from "./Components/Email";
import { Familiale } from "./Components/Familiale";
import { Fname } from "./Components/Fname";
import { Lname } from "./Components/Lname";
import { Objectifs } from "./Components/Objectifs";
import { Phone } from "./Components/Phone";
import {Submit} from "./Components/Submit";
import { Competences } from "./Components/Competences";
import { CompetencesTechniques } from "./Components/Competencestechniques";
import { Formation } from "./Components/Formation";
import { Interets } from "./Components/Interets";
import { Profil } from "./Components/Profil";

function App() {
  return (
    <>
      <head>
        <div><Titredelapage/></div>
      </head>
        <body>
          <h1>Formulaire-CV</h1>
          <form>
            <div><TitreCv/></div><br/>
            <div><Fname /></div><br />
            <div><Lname /></div><br />
            <div><Age /></div><br />
            <div><Bday /></div><br />
            <div><Adr /></div><br />
            <div><Phone /></div><br />
            <div><Email /></div><br />
            <div><Familiale /></div><br />
            <div><Diplome /></div><br />
            <div><Profil /></div><br />
            <div><Formation /></div><br />
            <div><Competences/></div><br />
            <div><CompetencesTechniques/></div><br />
            <div><Objectifs /></div><br />
            <div><Interets /></div><br />
            <div><Autre /></div><br />
            <div><Submit/></div><br />
        </form>
      </body>
    </>
  );
}
export default App;

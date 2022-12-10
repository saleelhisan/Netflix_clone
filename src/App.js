import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Navbar/Banner/Banner";
import RowPost from "./Components/Navbar/Rowpost/RowPost";
import {action,originals,comedymovies,horrormovies,doc} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedymovies} title="Comedy Movies" isSmall/>
      <RowPost url={horrormovies} title="Horror movies" isSmall/>
      <RowPost url={doc} title="Documentries" isSmall/>


      {/* <RowPost url={action} title="Action"/> */}


    </div>
  );
}

export default App;

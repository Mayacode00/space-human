import React, { useState, useEffect } from "react";
import axios from "axios";
import Landing from "../../assets/landing.jpg";
import Bckgrd from "../../assets/background.jpg";
import Landing2 from "../../assets/landing2.jpg";
import Landing3 from "../../assets/landing3.jpg";
import Jupitar from "../../assets/jupitar.jpg";
import Astr1 from "../../assets/astr.jpg";
import Dune from "../../assets/dunes.jpg";
import Astr3 from "../../assets/astr3.jpg";
import Astr4 from "../../assets/astr4.jpg";
import Astronauts from "../../assets/atronauts.jpg";
import "../space/space.css";

function Space() {
  const [climate, setClimate] = useState("");
  const [name, setName] = useState("");
  const [diameter, setDiameter] = useState("");
  const [terrain, setTerrain] = useState("");
  const [orbit, setOrbit] = useState("");
  const [names, setNames] = useState("");
  const [birth, setBirth] = useState("");
  const [eye, setEye] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [hair, setHair] = useState("");
  const [skin, setSkin] = useState("");
  const [mass, setMass] = useState("");

  useEffect(() => {
    getCharacters();
  });
  useEffect(() => {
    getHumans();
  });
  const getCharacters = () => {
    axios.get("http://swapi.dev/api/planets/1/").then((response) => {
      setClimate((climate) => response.data.climate);
      setName((name) => response.data.name);
      setDiameter((diameter) => response.data.diameter);
      setTerrain((terrain) => response.data.terrain);
      setOrbit((orbit) => response.data.orbital_period);
      
    });
  };
  const getHumans = () => {
    axios.get("https://swapi.dev/api/people/1/").then((response) => {
      setBirth((birth) => response.data.birth_year);
      setEye((eye) => response.data.eye_color);
      setGender((gender) => response.data.gender);
      setMass((mass) => response.data.mass);
      setSkin((skin) => response.data.skin_color);
      setHair((hair) => response.data.hair_color);
      setHeight((height) => response.data.height);
      setNames((names) => response.data.name);
    });
  };
  return (
    <>
      <div className="bg-black text-white text-center font-body">
        <h1 className="text-xl md:text-3xl font-bold py-2">
          Would you dare to go here?
        </h1>
        <div className="flex my-10 place-content-center flex-wrap">
          <div className="img-wrapper">
            <img src={Landing} alt="ph" className="img-blur" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Bckgrd} alt="ph" className="img-zoom" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Landing2} alt="ph" className="img-zoom-in" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Landing3} alt="ph" className="img-blur" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Jupitar} alt="ph" className="img-zoom-in" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Dune} alt="ph" className="img-zoom" />
            <div className="content fade">
              <p className="text-xl text-gray-300 mb-2">
                This is planet "{name}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Diameter of "{diameter}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                It has climate of "{climate}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Its orbital_period is "{orbit}"
              </p>
              <p className="text-xl text-gray-300 mb-2">
                Terrain is "{terrain}"
              </p>
            </div>
          </div>
        </div>
        <h1 className=" text-xl md:text-xl font-semibold py-2">
          If yes why not check out the teams and where they have visited
        </h1>
        <div className="flex py-10 place-content-center flex-wrap">
          <div className="img-wrapper">
            <img src={Astr1} alt="ph" className="img-zoom-in" />
            <div className="content fade">
              <p className="text-xl">"name": {names}</p>
              <p className="text-xl">"gender": {gender}</p>
              <p className="text-xl">"birth_year": {birth}</p>
              <p className="text-xl">"height": {height}</p>
              <p className="text-xl">"hair_color": {hair}</p>
              <p className="text-xl">"eye_color": {eye}</p>
              <p className="text-xl">"skin_color": {skin}</p>
              <p className="text-xl">"mass": {mass}</p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Astr3} alt="ph" className="img-blur" />
            <div className="content fade">
                <p className="text-xl">"name": {names}</p>
              <p className="text-xl">"gender": {gender}</p>
              <p className="text-xl">"birth_year": {birth}</p>
              <p className="text-xl">"height": {height}</p>
              <p className="text-xl">"hair_color": {hair}</p>
              <p className="text-xl">"eye_color": {eye}</p>
              <p className="text-xl">"skin_color": {skin}</p>
              <p className="text-xl">"mass": {mass}</p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Astr4} alt="ph" className="img-zoom" />
            <div className="content slide-right">
                <p className="text-xl">"name": {names}</p>
              <p className="text-xl">"gender": {gender}</p>
              <p className="text-xl">"birth_year": {birth}</p>
              <p className="text-xl">"height": {height}</p>
              <p className="text-xl">"hair_color": {hair}</p>
              <p className="text-xl">"eye_color": {eye}</p>
              <p className="text-xl">"skin_color": {skin}</p>
              <p className="text-xl">"mass": {mass}</p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Astronauts} alt="ph" className="img-zoom-in" />
            <div className="content slide">
                <p className="text-xl">"name": {names}</p>
              <p className="text-xl">"gender": {gender}</p>
              <p className="text-xl">"birth_year": {birth}</p>
              <p className="text-xl">"height": {height}</p>
              <p className="text-xl">"hair_color": {hair}</p>
              <p className="text-xl">"eye_color": {eye}</p>
              <p className="text-xl">"skin_color": {skin}</p>
              <p className="text-xl">"mass": {mass}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Space;

import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Details from "./components/DetailsPage/DetailsPage";




function App() {

  // All information about games

  let games = {
    currentGames: {
      a: ["Футбольный матч: Польша vs Франции", "20:30"],
      b: ["Хоккейный матч: Латвия vs Литва", "21:30"],
      c: ["Волейбольный матч: Финляндия vs Италии", "15:00"],
    },
    upcommingGames: {
      a: ["Водное поло: Англия vs Испании", "30 Сентября 15:20"],
      b: ["Теннис Финал Европейских игр: США vs Турменистана", "20 Октября 11:20"],
      c: ["Шахматы: Египет vs Македонии", "10 Августа 19:50"],
    },
  };

  // Creating Banner 

  function makeABet(game, time, choisenBet) {


    const banner = document.createElement("div")
    const bannerBtn = document.createElement("button")

    banner.innerHTML = "<p>Спасибо, ваша ставка: " + game + ". Время проведения: " + time + "  " + choisenBet + " принята!</p>";
    bannerBtn.innerHTML = "Закрыть";

    banner.classList.add('banner')
    bannerBtn.classList.add('newBtn')


    let app = document.querySelector(".App")
    app.prepend(banner)
    banner.append(bannerBtn)


    // Deleting Banner

    bannerBtn.onclick = () => { banner.remove() }
    setTimeout(clearBanner, 9000)
    function clearBanner() {
      banner.remove()
    }


  }



  return (

    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage games={games} />} />
          <Route path="/Details" element={<Details bet={makeABet} />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;

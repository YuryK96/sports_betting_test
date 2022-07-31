import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useRef } from "react";
import DetailsPageCss from "./DetailsPage.module.css"








const Details = (props) => {

    let location = useLocation();
    const checkDisabled = useRef();

    let choisenBet
    function checkType(arg) {
        choisenBet = arg

    }



    function buttonCheck() {
        checkDisabled.current.classList.remove(DetailsPageCss.linkDisabled)
    }

    return (


        <div>
            <div className={DetailsPageCss.gameEvent}>
                <h1>Игровое событие</h1>
                <p> {location.state[0]} </p>
                <p>{location.state[1]}</p>
            </div>


            <div className={DetailsPageCss.allBet}>
                <div className={DetailsPageCss.bet}><label htmlFor="option1" >На победу хозяев</label> <input onChange={() => checkType("На победу хозяев")} name="home" onClick={buttonCheck} id="option1" type="radio" /> <p>Коофициент: {(Math.random() * 20).toFixed(2)} %</p></div>

                <div className={DetailsPageCss.bet}> <label htmlFor="option2">На победу гостей</label> <input onChange={() => checkType("На победу гостей")} name="home" onClick={buttonCheck} id="option2" type="radio" /><p>Коофициент: {(Math.random() * 20).toFixed(2)} %</p></div>

                <div className={DetailsPageCss.bet}><label htmlFor="option3">На ничью</label> <input onChange={() => checkType("На ничью")} name="home" onClick={buttonCheck} id="option3" type="radio" /><p>Коофициент: {(Math.random() * 20).toFixed(2)} %</p></div>
            </div>

            <div className= {DetailsPageCss.allBtn}>
                <NavLink ref={checkDisabled} onClick={() => props.bet(location.state[0], location.state[1], choisenBet)} className={`${DetailsPageCss.linkButton} ${DetailsPageCss.linkDisabled}`} to="/"> Сделать ставку</NavLink>
                <NavLink className={DetailsPageCss.backButton} to="/">Назад</NavLink>
                </div>

        </div>

    )



}

export default Details;
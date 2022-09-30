import React, { useState, useRef, useEffect } from 'react'
import CardAdd from './CardAdd'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "Card.app" // don't change if you want to keep your data


export default function Interface({ storages }) {

    let count = 1;
    const cardNames = useRef()

    const [card, setCard] = useState([])


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedData) setCard(storedData)
    }, [])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(card))
    }, [card])


    function deleteCard(cardSp) {

        const newCard = card.filter((item) => item.id !== cardSp.id);
        setCard(newCard)
        console.log(newCard);
        
    }


    function addCard() {
        const name = cardNames.current.value
        if (name !== "" && card.length < 5) {
            setCard(prevCard => [...prevCard, { id: uuidv4(), nameCard: name }])
            cardNames.current.value = null
        }
        else if (name === "") {
            alert("please, submit your set name !")
        }
        else {
            alert("You can't use more than 5 card !! ")
        }

    }

    return (

        <div>
            <div className='sets'>


                <div className="card">
                    <input className='card--input' type="text" placeholder=" Set Name" ref={cardNames} />
                    <button className="card--button" onClick={addCard} > + </button>
                </div>


                {card.map((cardSp) => {
                    return <CardAdd cardSp={cardSp} deleteCard={deleteCard} count={count++} />

                })

                }
            </div>
        </div>
    )
}

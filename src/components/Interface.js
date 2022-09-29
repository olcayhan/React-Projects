import React, { useState, useRef } from 'react'
import WordList from './WordList'
import CardAdd from './CardAdd'
import { v4 as uuidv4 } from 'uuid';

export default function Interface({ setAllWords }) {

    const cardNames = useRef()

    const [card, setCard] = useState([])
    console.log(card);

    function addCard() {
        const name = cardNames.current.value
        if (name !== "") {
            setCard(prevCard => [...prevCard, { id: uuidv4(), nameCard: name }])
        }
        cardNames.current.value = null
    }

    return (

        <div>
            <div className='sets'>


                <div className="card">
                    <input className='card--input' type="text" placeholder=" Set Name" ref={cardNames} />
                    <button className="card--button" onClick={addCard} > + </button>
                </div>


                {card.map((cardSp) => {
                    return <CardAdd cardSp={cardSp} />

                })

                }
            </div>
        </div>
    )
}

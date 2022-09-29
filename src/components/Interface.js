import React, { useState, useRef, useEffect } from 'react'
import CardAdd from './CardAdd'
import { v4 as uuidv4 } from 'uuid';

export default function Interface() {

    const wordList = [{ id: 1, english: "hello", turkish: "merhaba" }]
    const cardNames = useRef()

    const [card, setCard] = useState([])
 

    function addCard() {
        const name = cardNames.current.value
        if (name !== "") {
            setCard(prevCard => [...prevCard, { id: uuidv4(), nameCard: name, words: wordList }])
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

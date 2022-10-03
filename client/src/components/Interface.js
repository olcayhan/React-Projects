import React, { useState, useRef, useEffect } from 'react'
import CardAdd from './CardAdd'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "Card.app" // don't change if you want to keep your data


export default function Interface({ storages }) {

    let count = 1;

    const cardNames = useRef()
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const [card, setCard] = useState(storedData)

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(card))
    }, [card])


    function deleteCard(cardSp) {
        let index = card.indexOf(cardSp);
        card[index] = "";
        setCard(card)
        localStorage.setItem(storages[index], JSON.stringify([]))
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
    console.log(card);

    return (

        <div>
            <div className='sets'>


                <div className="card">
                    <input className='card--input' type="text" placeholder=" Set Name" ref={cardNames} />
                    <button className="card--button" onClick={addCard} > + </button>
                </div>


                {card.map((cardSp) => {
                    return <CardAdd cardSp={cardSp} deleteCard={deleteCard} count={count++} storageCard={LOCAL_STORAGE_KEY} />
                })

                }
            </div>
        </div>
    )
}

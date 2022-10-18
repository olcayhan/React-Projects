import React, { useRef } from 'react'

export default function CardAdd({ cardSp, deleteCard, count, storageCard, hidden }) {




    const name = useRef()
    const edit = useRef()


    function routesChange() {
        window.location.pathname = `/set${count}`
    }
    function routeLearn() {

        window.location.pathname = `/learn${count}`
    }
    function routeTest() {
        window.location.pathname = `/test${count}`

    }

    function editName() {
        const storedData = JSON.parse(localStorage.getItem(storageCard))

        if (edit.current.value !== "") {

            name.current.value = edit.current.value;
            storedData[count - 1].nameCard = edit.current.value;
            localStorage.setItem(storageCard, JSON.stringify(storedData))
            edit.current.value = null

        }
    }
    function deleteCards(e) {
        deleteCard(cardSp);
    }

    return (
        <div className="card" id='cards'>
            <input className="cardName" type="submit" onClick={routesChange} ref={name} value={cardSp.nameCard} />
            <input className="editName" type="text" placeholder='Edit Name' ref={edit} />

            <button className="editBtn" type="submit" onClick={editName}>
                <i class="fa fa-check"></i>
            </button>

            <button className='learnBtn' type="submit" onClick={routeLearn}>
                Pair
            </button>
            <button className='testBtn' type="submit" onClick={routeTest}>
                Test
            </button>
            <button className="deleteCard" onClick={deleteCards} >
                <i class="fa fa-remove"></i>
            </button>
        </div>
    )
}

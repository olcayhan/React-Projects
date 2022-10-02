import React, { useRef } from 'react'

export default function CardAdd({ cardSp, deleteCard, count, storageCard }) {




    const name = useRef()
    const edit = useRef()


    function routesChange() {
        window.location.pathname = `/set${count}`
    }
    function routeLearn() {
        window.location.pathname = `/learn${count}`
    }

    function editName() {
        if (edit.current.value !== "") name.current.value = edit.current.value;

        const storedData = JSON.parse(localStorage.getItem(storageCard))
        storedData[count - 1].nameCard = edit.current.value;

        localStorage.setItem(storageCard, JSON.stringify(storedData))

        console.log(storedData[count - 1].nameCard);




        edit.current.value = null
    }
    function deleteCards() {
        deleteCard(cardSp);
    }

    if (cardSp !== "a") {

        return (
            <div className="card" id='cards'>
                <input className="cardName" type="submit" onClick={routesChange} ref={name} value={cardSp.nameCard} />
                <input className="editName" type="text" placeholder='editName' ref={edit} />
                <input className="editBtn" type="submit" onClick={editName} value="edit" />
                <input type="submit" onClick={routeLearn} value="Learn" />
                <button className="deleteCard" onClick={deleteCards} >Delete <i class="fa fa-remove"></i></button>
            </div>
        )
    }

}

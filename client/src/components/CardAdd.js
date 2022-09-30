import React, { useRef } from 'react'

export default function CardAdd({ cardSp, deleteCard, count }) {


    const name = useRef()
    const edit = useRef()
    function routesChange() {
        window.location.pathname = `/set${count}`

    }

    function editName() {
        if (edit.current.value !== "") name.current.innerHTML = edit.current.value
    }
    function deleteCards() {
        deleteCard(cardSp);
    }


    return (
        <div className="card" id='cards'>
            <button onClick={routesChange} ref={name}>{cardSp.nameCard}</button>
            <button type='submit' onClick={deleteCards} >Delete Card</button>
            <input type="text" placeholder='editName' ref={edit} />
            <button type="submit" onClick={editName}>Edit</button>

        </div>
    )


}

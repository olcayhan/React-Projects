import React, { useRef } from 'react'

export default function CardAdd({ cardSp }) {

    console.log(cardSp);
    
function routeWord(){
    window.location.pathname = "/words"
}

    return (
        <div className="card" id='cards'>
            <button onClick={routeWord}>{cardSp.nameCard}</button>
        </div>
    )
}

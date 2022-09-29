import React, { useRef } from 'react'
import WordList from './WordList';

export default function CardAdd({ cardSp }) {
    let count = 0
    function routeWord() {
        count++
        window.location.pathname = `/cards${count}`
    }


    return (
        <div className="card" id='cards'>
            <button onClick={routeWord}>{cardSp.nameCard}</button>
        </div>

        
    )
}

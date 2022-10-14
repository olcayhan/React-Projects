import React from 'react'
import note from "../images/note.png"

export default function StartScreen() {
    return (
        <div className='startscreen'>
            <img src={note} />
            <h4>Focus on your day</h4>
            <p>Get things done with My day, a list that refreshes every day</p>
        </div>
    )
}

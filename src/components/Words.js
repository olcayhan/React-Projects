import React from 'react'

export function Words({ word, deleteWord }) {

    function delWord() {
        deleteWord(word.id)
    }


    return (
        <li>
            <p>{word.turkish} </p>
            <p>{word.english}</p>
            <button type="submit" onClick={delWord}>Delete</button>
            <hr />
        </li>
    )
}
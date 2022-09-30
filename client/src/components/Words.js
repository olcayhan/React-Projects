import React from 'react'

export function Words({ word, deleteWord }) {

    function delWord() {
        deleteWord(word.id)
    }


    return (
        <li className='lists'>
            <p className='word--turkish'>{word.turkish}</p>
            <p className='word--english'> {word.english}</p>
            <button type="submit" className='delBtn' onClick={delWord}>Delete</button>
            <hr />
        </li>
    )
}
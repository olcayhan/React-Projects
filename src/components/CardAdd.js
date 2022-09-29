import React from 'react'
import WordList from './WordList';

export default function CardAdd({ cardSp }) {

    let temp;
    function wordList(e) {
        console.log(e.target.name);
        temp = <div>
            <WordList />
        </div>
    }


    return (
        <div className="card" id='cards'>
            <button onClick={wordList} name={cardSp.nameCard}>{cardSp.nameCard}</button>
            {temp}
        </div>
    )


}

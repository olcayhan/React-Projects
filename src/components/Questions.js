import React from 'react'

export default function Questions({ answerSort ,setWordId }) {

    function getWordId(){
        setWordId(answerSort.id)
    }

    return (
        <div>
            <button type="submit" className='btn btn-primary w-25 m-2'  onClick={getWordId}> {answerSort.english}</button>
        </div>
    )
}

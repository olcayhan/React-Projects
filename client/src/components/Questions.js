import React from 'react'

export default function Questions({ answer, question, setWordID }) {

    function getWordId() {
        if (question === answer.turkish) {
            setWordID(answer.id)
        }
        else {
            setWordID(1)

        }
    }

    return (
        <div>
            <input
                type="submit"
                className='btn btn-primary w-25 m-2'
                onClick={getWordId}
                value={answer.english}
            />
        </div>
    )
}

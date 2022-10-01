import React from 'react'

export default function Questions({ answer, question, setWordID, setCount, count }) {

    function getWordId() {
        if (count === 3) setCount(0)
        else setCount(prevCount => prevCount = prevCount + 1)

        if (question === answer.turkish) {

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

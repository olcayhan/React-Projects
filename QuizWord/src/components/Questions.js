import React from 'react'

export default function Questions({ answer, question, setWordID , count}) {

    function getWordId() {
        if (question === answer.turkish) {
            setWordID(answer.id)
        }
        else if (count.current % 2 === 0 && question !== answer.turkish) {
            setWordID(1)
            count.current++

        }
        else if (count.current % 2 === 1 && question !== answer.turkish) {
            setWordID(2)
            count.current++
        }
    }
    return (
        <div>
            <input
                type="submit"
                className='learn--answerBtn'
                onClick={getWordId}
                value={answer.english}
            />
        </div>
    )
}

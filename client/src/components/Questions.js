import React from 'react'
import { useRef } from "react";

export default function Questions({ answer, question, setWordID }) {
    let count = useRef(4)
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
                className='btn btn-primary w-25 m-2'
                onClick={getWordId}
                value={answer.english}
            />
        </div>
    )
}

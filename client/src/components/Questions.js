import React from 'react'

export default function Questions({ answer, setWordId }) {
    
    function getWordId() {
        setWordId(answer.id)
    }

    return (
        <div>
            <button
                type="submit"
                className='btn btn-primary w-25 m-2'
                onClick={getWordId}>
                {answer.english}
            </button>
        </div>
    )
}

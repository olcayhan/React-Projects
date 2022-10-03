import React, { useState } from 'react'

export default function Learn({ learnStorages }) {

    const allWords = JSON.parse(localStorage.getItem(learnStorages))
    const [wordTemp, setWordTemp] = useState(allWords)

    wordTemp.sort(() => Math.random() - 0.5)
    let fullSelected = []
    function checkCorrect(e) {
        fullSelected.push(e.target)
        e.target.style.backgroundColor = "#533483"
        if (fullSelected.length === 2) {

            fullSelected[0].style.backgroundColor = "#400D51"
            fullSelected[1].style.backgroundColor = "#400D51"

            if (fullSelected[0] === fullSelected[1]) {

                alert("please don't click same button")

            }

            else if (fullSelected[0].value === fullSelected[1].value) {

                setWordTemp(wordTemp.filter((item) => fullSelected[0].value !== item.id))
                setWordTemp(wordTemp.filter((item) => fullSelected[1].value !== item.id))

            }

            fullSelected = []
        }


    }


    return (
        <div>
            {wordTemp.map((item) => {
                return <button className='pairWith' onClick={checkCorrect} value={item.id}>{item.turkish}</button>
            })}
            {wordTemp.map((item) => {
                return <button className='pairWith' onClick={checkCorrect} value={item.id}>{item.english}</button>
            })}
        </div>
    )
}

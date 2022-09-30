import { useState, useRef, useEffect } from "react"
import { Words } from "./Words";
import { v4 as uuidv4 } from 'uuid';




export default function WordList({ stored }) {

    const handleTurkish = useRef()
    const handleEnglish = useRef()
    const [words, setWord] = useState([])
    console.log(words);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(stored))
        setWord(storedData)
    }, [stored])


    useEffect(() => {
        localStorage.setItem(stored, JSON.stringify(words))
    }, [words, stored])





    function deleteWord(id) {

        const newWords = words.filter((item) => item.id !== id);
        setWord(newWords)
    }

    function addWord() {
        const english = handleEnglish.current.value
        const turkish = handleTurkish.current.value

        if (english === "" || turkish === "") return

        setWord(prevWord => {
            return [...prevWord, { id: uuidv4(), english: english, turkish: turkish }]
        })

        handleEnglish.current.value = null
        handleTurkish.current.value = null

    }


    if (words.length > 5) return;

    return (


        <div className="card--all">
            <input className="input--turkish" type="text" ref={handleTurkish} placeholder="Turkish Word" />
            <input className="input--english" type="text" ref={handleEnglish} placeholder="English Word" />
            <button className="addBtn" type="submit" onClick={addWord}> Add Word</button>

            <ol>
                <p className="header--words"><span>Turkish</span>-<span>English</span></p>


                {words.map(word => {
                    return <Words word={word} deleteWord={deleteWord} />

                })

                }

            </ol>

        </div>
    )
}


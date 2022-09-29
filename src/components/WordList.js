import { useState, useRef, useEffect } from "react"
import { Words } from "./Words";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "Word.app" // don't change if you want to keep your data


export default function WordList({setAllWords}) {

    

    const handleTurkish = useRef()
    const handleEnglish = useRef()
    const [words, setWord] = useState([])
    setAllWords(words)

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedData) setWord(storedData)
    }, [])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(words))
    }, [words])





    function deleteWord(id) {

        const newWords = words.filter((item) => item.id !== id);
        setWord(newWords)
    }

    function addWord() {
        const english = handleEnglish.current.value
        const turkish = handleTurkish.current.value

        if (english === "" || turkish === "") return

        setWord(prevWord => {
            return [...prevWord, { id: uuidv4(), english: english, turkish: turkish}]
        })
        
        handleEnglish.current.value = null
        handleTurkish.current.value = null

    }



    return (


        <div className="card--all">
            <input  className="input--turkish" type="text" ref={handleTurkish} placeholder="Turkish Word" />
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


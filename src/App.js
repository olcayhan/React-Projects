import { useState, useRef, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import WordList from "./components/WordList";

const LOCAL_STORAGE_KEY = "Word.app"
export default function App() {

    const handleTurkish = useRef()
    const handleEnglish = useRef()
    const [words, setWord] = useState([])

    
    useEffect(()=>{
        const storedData = localStorage.getItem(JSON.parse(LOCAL_STORAGE_KEY))
        if (storedData) setWord(storedData)
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(words))
    },[words])

   



    function deleteWord(id) {

        const newWords = words.filter((item) => item.id !== id);
        setWord(newWords)
        
    }

    function addWord() {
        const english = handleEnglish.current.value
        const turkish = handleTurkish.current.value
        setWord(prevWord => {
            return [...prevWord, { id: uuidv4(), english: english, turkish: turkish, delete: false }]
        })

        handleEnglish.current.value = null
        handleTurkish.current.value = null

    }

    return (
        <div>

            <input type="text" ref={handleTurkish} placeholder="Turkish Word" />
            <input type="text" ref={handleEnglish} placeholder="English Word" />
            <button type="submit" onClick={addWord}> Add Word</button>

            <ol>
                <p>Turkish - English</p>
                <WordList words={words} deleteWord={deleteWord} />

            </ol>
        </div>
    )
}
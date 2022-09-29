import { useState, useEffect } from "react"
import Interface from "./components/Interface";

const LOCAL_STORAGE_KEY = "Word.app"

export default function App() {
    
    
        const [allWords, setAllWords] = useState([])
    
        useEffect(() => {
            const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
            if (storedData) setAllWords(storedData)
        }, [])


    return (
        <div>

            <Interface />

        </div>
    )
}
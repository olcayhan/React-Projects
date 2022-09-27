import { useState ,useEffect} from "react"
import WordList from "./components/WordList";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";

const LOCAL_STORAGE_KEY = "Word.app"

export default function App() {
 

    const [allWords, setAllWords] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedData) setAllWords(storedData)
    }, [])

    let Component
    switch (window.location.pathname) {
        case "/":
            Component = <WordList setAllWords={setAllWords} />
            break
        case "/words":
            Component = <WordList setAllWords={setAllWords}/>
            break
        case "/learn":
            Component = <Learn allWords = {allWords}/>
            break
        case "/test":
            //Component = Test
            break
    }



    return (
        <div>
            <Navbar />

            {Component}

        </div>
    )
}
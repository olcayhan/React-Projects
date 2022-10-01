import Interface from "./components/Interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordList from "./components/WordList";
import Learn from "./components/Learn";

const LOCAL_STORAGE_KEY1 = "Word.app0"
const LOCAL_STORAGE_KEY2 = "Word.app1"
const LOCAL_STORAGE_KEY3 = "Word.app2"
const LOCAL_STORAGE_KEY4 = "Word.app3"
const LOCAL_STORAGE_KEY5 = "Word.app4"

const LOCAL_STORAGE_KEY10 = "learn.app0"
const LOCAL_STORAGE_KEY20 = "learn.app1"
const LOCAL_STORAGE_KEY30 = "learn.app2"
const LOCAL_STORAGE_KEY40 = "learn.app3"
const LOCAL_STORAGE_KEY50 = "learn.app4"


export default function App() {

    const storages = [LOCAL_STORAGE_KEY1, LOCAL_STORAGE_KEY2, LOCAL_STORAGE_KEY3, LOCAL_STORAGE_KEY4, LOCAL_STORAGE_KEY5]
    const learnStorages = [LOCAL_STORAGE_KEY10, LOCAL_STORAGE_KEY20, LOCAL_STORAGE_KEY30, LOCAL_STORAGE_KEY40, LOCAL_STORAGE_KEY50]

    for (let i = 0; i < 5; i++) {
        if (JSON.parse(localStorage.getItem(learnStorages[i]) === null)) {
            const allWords = JSON.parse(localStorage.getItem(storages[i]))
            localStorage.setItem(learnStorages[i], JSON.stringify(allWords))
        }
    }


    return (

        <div>


            {<BrowserRouter>
                <Routes>
                    <Route index element={<Interface storages={storages} />} />
                    <Route path={"/set1"} element={<WordList stored={storages[0]} />} />
                    <Route path={"/set2"} element={<WordList stored={storages[1]} />} />
                    <Route path={"/set3"} element={<WordList stored={storages[2]} />} />
                    <Route path={"/set4"} element={<WordList stored={storages[3]} />} />
                    <Route path={"/set5"} element={<WordList stored={storages[4]} />} />

                    <Route path={"/learn1"} element={<Learn learnStorages={learnStorages[0]} />} />
                    <Route path={"/learn2"} element={<Learn learnStorages={learnStorages[1]} />} />
                    <Route path={"/learn3"} element={<Learn learnStorages={learnStorages[2]} />} />
                    <Route path={"/learn4"} element={<Learn learnStorages={learnStorages[3]} />} />
                    <Route path={"/learn5"} element={<Learn learnStorages={learnStorages[4]} />} />

                </Routes>
            </BrowserRouter>}



        </div >
    )
}
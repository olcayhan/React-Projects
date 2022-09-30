import Interface from "./components/Interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordList from "./components/WordList";
import Learn from "./components/Learn";

const LOCAL_STORAGE_KEY1 = "Word.app0"
const LOCAL_STORAGE_KEY2 = "Word.app1"
const LOCAL_STORAGE_KEY3 = "Word.app2"
const LOCAL_STORAGE_KEY4 = "Word.app3"
const LOCAL_STORAGE_KEY5 = "Word.app4"


export default function App() {

    const storages = [LOCAL_STORAGE_KEY1, LOCAL_STORAGE_KEY2, LOCAL_STORAGE_KEY3, LOCAL_STORAGE_KEY4, LOCAL_STORAGE_KEY5]






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

                    <Route path={"/learn1"} element={<Learn stored={storages[0]} />} />
                    <Route path={"/learn2"} element={<Learn stored={storages[1]} />} />
                    <Route path={"/learn3"} element={<Learn stored={storages[2]} />} />
                    <Route path={"/learn4"} element={<Learn stored={storages[3]} />} />
                    <Route path={"/learn5"} element={<Learn stored={storages[4]} />} />

                </Routes>
            </BrowserRouter>}



        </div >
    )
}
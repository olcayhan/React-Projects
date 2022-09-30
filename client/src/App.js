import Interface from "./components/Interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordList from "./components/WordList";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY1 = "Word.appasdasd121"
const LOCAL_STORAGE_KEY2 = "Word.app2"
const LOCAL_STORAGE_KEY3 = "Word.app3"
const LOCAL_STORAGE_KEY4 = "Word.app4"
const LOCAL_STORAGE_KEY5 = "Word.app5"


export default function App() {

    const storages = [LOCAL_STORAGE_KEY1, LOCAL_STORAGE_KEY2, LOCAL_STORAGE_KEY3, LOCAL_STORAGE_KEY4, LOCAL_STORAGE_KEY5]

    console.log(localStorage.getItem(LOCAL_STORAGE_KEY1));

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify([]))
    }, [])



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

                </Routes>
            </BrowserRouter>}


        </div >
    )
}
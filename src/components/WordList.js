import React from 'react'
import { Words } from "./Words";

export default function WordList({ words, deleteWord }) {
    return (

        words.map(word => {
            return <Words  word={word} deleteWord={deleteWord} />
        })

    )
}


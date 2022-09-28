import { useState } from "react";
import Questions from "./Questions";


export default function Learn({ allWords }) {



  let answerSort = [...allWords]
  let questionSort = [...allWords]

  answerSort.sort(() => Math.random() - 0.5)
  questionSort.sort(() => Math.random() - 0.5)

  const [wordId, setWordId] = useState()


  console.log(wordId);



  return (
    <div>
      <h1>
        {questionSort[0].turkish}
      </h1>
      <Questions answerSort={answerSort[0]} setWordId={setWordId} />
      <Questions answerSort={answerSort[1]} setWordId={setWordId} />
      <Questions answerSort={answerSort[2]} setWordId={setWordId} />
      <Questions answerSort={answerSort[3]} setWordId={setWordId} />
    </div>
  )
}

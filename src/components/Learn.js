import { useEffect, useState, useRef } from "react";
import Questions from "./Questions";


export default function Learn({ allWords }) {

  const [wordId, setWordId] = useState(0)
  const [question, setQuestion] = useState([...allWords])
  let answer = useRef([...allWords])

  if (wordId === question[0].id) {
    setQuestion(question.filter((item) => item.id !== wordId))
  }

  useEffect(() => {
    answer.current = answer.current.sort(() => Math.random() - 0.5)
  }, [question])




  return (
    <div>
      <h1>
        {question[0].turkish}
      </h1>
      <Questions answer={answer.current[0]} setWordId={setWordId} />
      <Questions answer={answer.current[1]} setWordId={setWordId} />
      <Questions answer={answer.current[2]} setWordId={setWordId} />
      <Questions answer={answer.current[3]} setWordId={setWordId} />
    </div>
  )
}

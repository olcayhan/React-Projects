import { useEffect, useState, useRef } from "react";
import AgainSection from "./AgainSection";
import Questions from "./Questions";


export default function Learn({ stored }) {


  const allWords = JSON.parse(localStorage.getItem(stored))
  console.log(allWords);

  const [wordId, setWordId] = useState(0)
  const [question, setQuestion] = useState([...allWords])
  let answer = useRef([...allWords])
  let correctAnswer = [];




  if (question.length !== 0) {
    if (wordId === question[0].id) {
      setQuestion(question.filter((item) => item.id !== wordId))
      correctAnswer.push(question[0])
      alert("correct")
    }
  }




  useEffect(() => {
    return () => {
      if (wordId !== question[0].id) {
        alert("wrong")
      }
    }
  }, [question,wordId])





  useEffect(() => {
    return () => {
      answer.current = answer.current.sort(() => Math.random() - 0.5)

    }
  }, [question])


  if (question.length !== 0) {
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
  else {
    return (

      <AgainSection />
    )
  }



}

import { useRef, useState } from "react";

import Questions from "./Questions";


export default function Learn({ learnStorages }) {

  const allWords = JSON.parse(localStorage.getItem(learnStorages))

  let [wordID, setWordID] = useState(0)

  // prepare for split questions
  let questions = useRef([...allWords])


  let question4s = useRef(questions.current.slice(0, 4))

  let answers = questions.current.slice(0, 4)

  let correctAnswers = useRef([])
  let wrongAnswers = useRef([])

  if (question4s.current.length === 0) {
    questions.current.splice(0, 4)
    question4s.current = questions.current.slice(0, 4)
    //localStorage.setItem(learnStorages, JSON.stringify(questions))
  }

  console.log(questions.current);


  if (wordID === question4s.current[0].id) {
    correctAnswers.current.push(question4s.current[0])
    question4s.current.splice(0, 1)

  }
  else if (wordID === 1) {
    wrongAnswers.current.push(question4s.current[0])
    question4s.current.splice(0, 1)
  }

  answers = answers.sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1>
        {question4s.current[0].turkish}
      </h1>
      {answers.map((answer) => {
        return <Questions answer={answer} question={question4s.current[0].turkish} setWordID={setWordID} />
      })}

    </div>
  )





}

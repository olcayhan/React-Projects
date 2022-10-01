import { useRef, useState } from "react";

import Questions from "./Questions";


export default function Learn({ learnStorages }) {

  const [count, setCount] = useState(0)


  const allWords = JSON.parse(localStorage.getItem(learnStorages))

  let [wordID, setWordID] = useState(0)

  // prepare for split questions
  let questions = [...allWords]
  let question4s = questions.slice(0, 4)
  let answers = [...question4s]

  let correctAnswers = useRef([])
  let wrongAnswers = useRef([])

  if (question4s.length === 0) {
    questions.splice(0, 4)
    localStorage.setItem(learnStorages, JSON.stringify(questions))
  }
  if (count > -1) {
    if (wordID === question4s[count].id) {
      correctAnswers.current.push(question4s[count])
    }
    else if (wordID === 1) {
      wrongAnswers.current.push(question4s[count])
    }
  }

  answers = answers.sort(() => Math.random() - 0.5)



  return (
    <div>
      <h1>
        {question4s[count].turkish}
      </h1>
      {answers.map((answer) => {
        return <Questions answer={answer} question={question4s[0].turkish} setWordID={setWordID} setCount={setCount} count={count}/>
      })}

    </div>
  )





}

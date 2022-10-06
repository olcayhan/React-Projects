import React, { useRef, useState } from "react";
import Questions from "./Questions";
import {useNavigate} from 'react-router-dom';




export default function Test({ testStorages }) {
  const allWords = JSON.parse(localStorage.getItem(testStorages))
  let count = useRef(1)
  let answers;
  const [wordID, setWordID] = useState(0)
  const navigate = useNavigate();

  // prepare for split questions
  let questions = useRef([...allWords])
  let question4s = useRef(questions.current.slice(0, 4))
  let correctAnswers = useRef([])
  let wrongAnswers = useRef([])

  function askQuestion() {

    if (wordID === question4s.current[0].id) {
      correctAnswers.current.push(question4s.current[0])
      question4s.current.splice(0, 1)
    }

    else if (wordID === 1 || wordID === 2) {
      wrongAnswers.current.push(question4s.current[0])
      question4s.current.splice(0, 1)
    }

    if (question4s.current.length === 0) {
      questions.current.splice(0, 4)
      question4s.current = questions.current.slice(0, 4)
    }


    answers = questions.current.slice(0, 4)

    answers.sort(() => Math.random() - 0.5)
  }

  if (questions.current.length !== 0) {
    askQuestion()
    return (
      <div className="learnSection">

        <button className="backBtn" onClick={() => { navigate(-1) }}>
          {"<"}
        </button>

        <div className="pointCounter">
          Point: {correctAnswers.current.length}
        </div>

        <div className="questionSection">
          <h1>
            {question4s.current[0].turkish}
          </h1>
        </div>
        <div className="answersSection">
          {
            answers.map((answer) => {

              return <Questions
                answer={answer}
                question={question4s.current[0].turkish}
                setWordID={setWordID}
                count={count}
              />

            })
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="setCheck">
        <div className="correctAns">

          Correct Answers : {correctAnswers.current.map((item) => { return <p>{item.english}</p> })}

        </div>

        <button className="playAgain" onClick={() => { window.location.reload() }}>Play again</button>

        <div className="wrongAns">

          Wrong Answers: {wrongAnswers.current.map((item) => { return <p>{item.english}</p> })}

        </div>
      </div>
    )
  }







}

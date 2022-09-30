import { useState } from "react";
import AgainSection from "./AgainSection";
import Questions from "./Questions";


export default function Learn({ stored }) {


  const allWords = JSON.parse(localStorage.getItem(stored))



  const [wordId, setWordId] = useState(0)

  const [question, setQuestion] = useState([...allWords])

  let correctAnswer = [];



  let answer = [...allWords]


console.log(answer);
  console.log("questions : " + question);
  console.log("WordId : " + wordId);


  console.log("a");
  if (wordId === question[0].id) {
    setQuestion(question.filter((item) => item.id !== wordId))
    correctAnswer.push(question[0])
    console.log("correct")
  }
  else if (wordId !== question[0].id) {
    console.log("wrong");
  }
  else {
    console.log("hello")
  }



  answer = answer.sort(() => Math.random() - 0.5)

  if (question.length !== 0) {
    return (
      <div>
        <h1>
          {question[0].turkish}
        </h1>
        {answer.map((item) => {
          return <Questions answer={item} setWordId={setWordId} />
        })
        }
      </div>
    )
  }
  else {
    return (

      <AgainSection />
    )
  }



}

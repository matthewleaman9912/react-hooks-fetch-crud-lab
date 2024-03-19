import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem";

function App() {
  const [page, setPage] = useState("List");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [newQuestions, setNewQuestions] = useState([]);
  const [originalQuestion, setOriginalQuestion] = useState([]);
  

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then((response) => response.json())
  .then((data) => {
    setQuizQuestions(data)
  });
}, []);

const originalQuestions = quizQuestions.map((question) => {
  return(<QuestionItem key={question.id} id={question.id} prompt={question.prompt} answers={question.answers} correctIndex={question.correctIndex} />
  )
 })




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm   isTrue={isTrue} setIsTrue={setIsTrue} quizQuestions={quizQuestions} setQuizQuestions={setQuizQuestions} /> : <QuestionList quizQuestions={quizQuestions} questions={originalQuestions}  isTrue={isTrue} />}
    </main>
  );
}

export default App;

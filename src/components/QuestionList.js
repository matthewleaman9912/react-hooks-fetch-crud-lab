import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, notOriginalQuestions, isTrue}) {



console.log(questions)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions}
      </ul>
    </section>
  );
}

export default QuestionList;

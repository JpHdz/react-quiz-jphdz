import { UseQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = UseQuiz();

  const question = questions[index];
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;

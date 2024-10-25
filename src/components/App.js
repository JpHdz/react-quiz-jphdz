import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { UseQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = UseQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   useEffect(function () {
//     const questions = async function () {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/questions");
//         const data = await res.json();
//         dispatch({ type: "dataRecived", payload: data });
//       } catch (err) {
//         dispatch({ type: "dataFailed" });
//       }
//     };
//     questions();
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <Main />
//     </div>
//   );
// }

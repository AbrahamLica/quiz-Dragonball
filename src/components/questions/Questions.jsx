import { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Questions.css";

const Questions = () => {
  const { state, dispatch } = useContext(Context);
  const [arrayQuestions, setArrayQuestions] = useState(state.quiz.perguntas);
  const [arrayQuestionsShuffled, setArrayQuestionsShuffled] = useState([]);
  const perguntaAtual = arrayQuestionsShuffled[state.quiz.perguntaAtual];
  const navigate = useNavigate();

  useEffect(() => {
    for (var i = arrayQuestions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrayQuestions[i];
      arrayQuestions[i] = arrayQuestions[j];
      arrayQuestions[j] = temp;
    }
    setArrayQuestionsShuffled(arrayQuestions);
  }, []);

  function nextQuestion() {
    if (state.quiz.perguntaAtual === arrayQuestionsShuffled.length - 1) {
      navigate("/endgame");
    } else {
      dispatch({
        type: "NEXT_QUESTION",
      });
    }
  }

  return (
    <div className="centralContainerQuestions">
      <div className="mainContainerQuestions">
        <div className="containerTitle">
          {arrayQuestionsShuffled.length ? (
            <h1 >{perguntaAtual.pergunta}</h1>
          ) : null}
        </div>

        {arrayQuestionsShuffled.length ? (
          <div className="alternativasContainer">
            {perguntaAtual.alternativas.map((item, index) => (
              <div
                className={`itemContainer ${
                  state.quiz.respostaSelecionada &&
                  item ===
                    state.quiz.perguntas[state.quiz.perguntaAtual].resposta
                    ? "correct"
                    : ""
                } 
              
              ${
                state.quiz.respostaSelecionada &&
                item !== state.quiz.perguntas[state.quiz.perguntaAtual].resposta
                  ? "wrong"
                  : ""
              }`}
                key={index}
                onClick={() => {
                  dispatch({
                    type: "CHECK_QUESTION",
                    payload: {
                      resposta:
                        state.quiz.perguntas[state.quiz.perguntaAtual].resposta,
                      item: item,
                    },
                  });
                }}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
        <button
          onClick={nextQuestion}
          className="nextQuestion"
          style={{
            visibility: state.quiz.respostaSelecionada ? "visible" : "hidden",
          }}
        >
          Avançar
        </button>
    </div>
  );
};

export default Questions;

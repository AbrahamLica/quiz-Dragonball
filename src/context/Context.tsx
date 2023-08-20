import { createContext, useReducer } from "react";
import perguntas from "../data/questions";
import {
  ActionType,
  ReducerInitialStateType,
  ChildrenType,
  ContextType,
  InitialStateContextType,
} from "../types/Types";

//////////////////////////// > > REDUCER < < ///////////////////////////////////

export const ReducerinitialState: ReducerInitialStateType = {
  gameStage: "Start",
  perguntas,
  perguntaAtual: 0,
  placar: 0,
  respostaSelecionada: false,
  respostaEscolhidaQuiz: "",
};

export function reducer(state: ReducerInitialStateType, action: ActionType) {
  switch (action.type) {
    case "START_GAME":
      return { ...state, gameStage: action.payload.gameStage };
      break;

    case "NEXT_QUESTION":
      return {
        ...state,
        perguntaAtual: state.perguntaAtual + 1,
        respostaSelecionada: false,
      };
      break;

    case "CHECK_QUESTION":
      const resposta = action.payload.resposta;
      const item = action.payload.item;
      var correctanswer = 0;
      if (resposta === item) {
        correctanswer = 1;
      }
      return {
        ...state,
        placar: state.placar + correctanswer,
        respostaEscolhidaQuiz: action.payload.item,
        respostaSelecionada: true,
      };
      break;

    case "RESTART_GAME":
      return ReducerinitialState;
  }

  return state;
}

///////////////////////// > > CONTEXT < < //////////////////////////////////

const ContextInitialState = {
  quiz: ReducerinitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  quiz: reducer(state.quiz, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

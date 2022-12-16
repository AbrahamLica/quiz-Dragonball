import { createContext, useReducer } from "react";
import perguntas from '../data/questions'
import { ActionType, initialStateType } from "../types/Types";


export const stages = ['Start', 'Playing', 'End']

export const initialState: initialStateType = {
    gameStage: stages[0],
    perguntas,
    perguntaAtual: 0,
    pontuacao: 0,
    respostaSelecionada: false
}

export function reducer(state: initialStateType, action: ActionType) {

}

export const Context = createContext(initialState)

export function ContextProvider({children}) {
    return(
        <Context.Provider value={'teste'}>
            {children}
        </Context.Provider>
    )
}


import {createContext, useReducer } from "react";
import perguntas from '../data/questions'
import { ActionType, ReducerInitialStateType, ChildrenType, ContextType, InitialStateContextType } from "../types/Types";

//////////////////////////// > > REDUCER < < ///////////////////////////////////

export const ReducerinitialState: ReducerInitialStateType = {
    gameStage: 'Start',
    perguntas,
    perguntaAtual: 0,
    placar: 0,
    respostaSelecionada: false
}

export function reducer(state: ReducerInitialStateType, action: ActionType) {

    switch (action.type) {
        case 'START_GAME':
            return {...state, gameStage: action.payload.gameStage};
            break;

        case 'NEXT_QUESTION':
            return {...state, perguntaAtual: state.perguntaAtual + 1};
            break;
            
    } 
    return state 
}

///////////////////////// > > CONTEXT < < //////////////////////////////////

const ContextInitialState = {
    quiz: ReducerinitialState
}

export const Context = createContext<ContextType>({
    state: ContextInitialState,
    dispatch: () => null
})

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
    quiz: reducer(state.quiz, action)
})

export function ContextProvider({children}: ChildrenType) {

    const [state, dispatch] = useReducer(mainReducer, ContextInitialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}


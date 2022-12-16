import React from "react"

export type DataType = {
    pergunta: string
    alternativas: string[]
    resposta: string
 }

export type ReducerInitialStateType = {
  gameStage: string
  perguntas: DataType[]
  perguntaAtual: number
  placar: number
  respostaSelecionada: boolean
}

export type ActionType = {
    type: string
    payload: {
        [key: string]: any;
    }
}

export type ChildrenType = {
    children: React.ReactNode
}

export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    quiz: ReducerInitialStateType
}

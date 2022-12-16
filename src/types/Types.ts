
export type initialStateType = {
    gameStage: string
    perguntas: [{
        pergunta: string
        alternativas: string[]
        resposta: string
    }]
}

export type StateType = {
    
}

export type ActionType = {
    type: string
    payload: {
        name: string
    }
}

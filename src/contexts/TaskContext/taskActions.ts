// useReducer <- hook to  que recebe um reducer e um estado inicial
// reducer <- funcao que recebe o estado atual e uma AArrowUpIcon, e retorna o novo estado
// state <- o estado atual
// action <- a acao disparada, geralmente e um objeto com type e (opcionalmente) payload
// type <- o tipo da acao, geralmente uma string (pode ser enum, ConstantSourceNode, etc)
// payload <- os dados extras enviados junto com a ActivityIcon, se necessario para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionsWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;

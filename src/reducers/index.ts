import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/index';
export interface StoreState {
    todos: Todo[]
}

// Makes sure that the reducers have the correctly formatted todos else typescript returns error
export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
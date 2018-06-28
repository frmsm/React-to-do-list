import { combineReducers } from 'redux';

const curInput = (state = '', action)=> {
    switch (action.type) {
        case 'ADD_CUR_TEXT':
            return action.text;
         case 'CLEAR_CUR_TEXT':
            return action.text;
        default:
            return state;
    }
};

const todos = (state=[], action)=> {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.text
            ];
        case 'CLEAR_TODOS':
            return [];
        case 'DEL_TODO':
            return state.filter((todo, id)=> {
                console.log(typeof action.id + ' ' + typeof id);
                    if (id !== action.id) return todo;
                });

        default:
            return state;
    };
    }

const reducers = combineReducers({
    curInput: curInput,
    todos: todos
});

export default reducers;
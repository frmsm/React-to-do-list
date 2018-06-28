import { connect } from 'react-redux';
import {addCurText, clearTodo, addTodo, clearCurText, delTodo} from "./actions";
import List from "./list";
import {AddTodo, ButtonClear} from "./Button";

const displayList = (state)=> {
    return {
        todos: state.todos
    }
};

const mapDispatchToPropsDelFromList = (dispatch)=> {
    return {
        onDelete: (id)=> {
            dispatch(delTodo(id))
        }
    }
};

export const VisibleTodos = connect(displayList, mapDispatchToPropsDelFromList)(List);

const clearList = (dispatch) => {
    return {
        buttonName: 'clear',
        onClick: ()=> {
            dispatch(clearTodo())
        }
    }
};

export const ClearTodoBtn = connect(null,clearList)(ButtonClear);

const mapStateToPropsAddTodo = (state) => {
    return {
        text: state.curInput
    }
};

const mapDispatchToPropsAddTodo = (dispatch) => {
    return {
        buttonName: 'add',
        onClick: (text)=> {
            dispatch(addTodo(text))
        },
        addText: (text)=> {
            dispatch(addCurText(text))
        },
        clrCurText: ()=> {
            dispatch(clearCurText())
        },
    }
};

export const AddNewTodo = connect(mapStateToPropsAddTodo, mapDispatchToPropsAddTodo)(AddTodo);
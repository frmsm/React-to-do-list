export const addTodo = (text)=> {
    return {
        type: 'ADD_TODO',
        text: text
    };
};

// export const delTodo = (id)=> {
//     return {
//         type: 'DEL_TODO',
//         id: id
//     }
// };

export const delTodo = (id)=> {
    return {
        type: 'DEL_TODO',
        id: id
    }
};

export const clearTodo = ()=> {
    return {type: 'CLEAR_TODOS'}
};

export const addCurText = (text)=> {
    console.log(text);
    return {
        type: 'ADD_CUR_TEXT',
        text: text
    };
};

export const clearCurText = ()=> {
    return {
        type: 'CLEAR_CUR_TEXT',
        text: ''
    }
};

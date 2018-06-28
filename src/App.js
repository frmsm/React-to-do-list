import React from 'react';
import { VisibleTodos, ClearTodoBtn, AddNewTodo } from "./dispatchers";

const divStyle = {
  margin: '10px 10px'
};

const App = ()=> (
        <div style={divStyle}>
            <AddNewTodo />
            <ClearTodoBtn />
            <VisibleTodos />
        </div>
);

export default App;

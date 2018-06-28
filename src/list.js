import React from 'react';
import {Del} from "./deleteTask";

const List = (props)=> {

    return <ul>
                {
                    props.todos.map((todo, i) =>
                        <li key={i} id={i} >
                            {todo}
                            <Del key={(i)} id={i} onClick={(e)=>{
                            e.preventDefault();
                            props.onDelete(Number(e.target.id));
                            }}/>
                        </li>
                    )
                }
            </ul>
};

export default List;
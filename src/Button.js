import React from 'react';

export const ButtonClear = (props)=>{
    return <button className='btn' onClick={props.onClick}>{props.buttonName}</button>;
};

export const AddTodo = (props)=> {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if ((props.text === undefined) || (!props.text.trim()))
                    return;
                props.onClick(props.text);
                props.clrCurText();
            }}>
                <input type="text"
                       placeholder='input text'
                       value = {props.text}
                       onChange={e=> {
                            e.preventDefault();
                            props.addText(e.target.value);
                        }
                }/>
                <button type="submit">
                    {props.buttonName}
                </button>
            </form>
        </div>
    )
};


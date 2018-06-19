import React, { Component } from 'react';
import { Del } from './deleteTask';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.tasks.length !== this.state.tasks.length) {
            this.setState({
                tasks: nextProps.tasks
            })
        }
    }

    deleteTask(e) {
        let index = e.target.id;
        let arr = this.state.tasks.slice();
        arr.splice(index,1);
         /*this.setState({
             tasks: arr
         });*/
         this.props.onTasksChange(arr);
    }

    getList() {
        let list = [];

        for (let i = 0; i < this.state.tasks.length; i++) {
            list.push(
                <li key={(i+1)}>
                    {this.state.tasks[i]} {i+1}
                    <Del key={(i+1)} id={i} onClick={this.deleteTask.bind(this)}/>
                </li>
            )
        }

        return list;
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }
}
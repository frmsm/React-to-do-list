import React, { Component } from 'react';
import { List } from './list';
import { Text } from './textInput';
import { Button } from "./Button";

const divStyle = {
  margin: '10px 10px'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curText: '',
            count: this.props.start,
            tasks: []
        };
    }

    increment() {
        if (/(^\s*$)|\d/.test(this.state.curText)) {
            this.setState({
                curText: ''
            });
            return;
        }

        this.setState({
            count: this.state.count + 1,
            tasks: [...this.state.tasks, this.state.curText],
            curText: ''
        });
    }

    changeTasks(tasks) {
        this.setState({
            tasks: [...tasks]
        })
    }

    onTextChange(e) {
          this.setState({
              curText: e.target.value
          });
    }

    clearList() {
        this.setState({
            tasks: []
        })
    }

    render() {
        return (
            <div style={divStyle}>
                <Text value = {this.state.curText} onChange={this.onTextChange.bind(this)} />
                <Button onClick={this.increment.bind(this)} text={'push'}/>
                <Button onClick={this.clearList.bind(this)} text={'clear'}/>
                <List tasks = {this.state.tasks} onTasksChange={this.changeTasks.bind(this)}/>
            </div>
        )
    }
}

export default App;

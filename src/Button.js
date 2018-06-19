import React from 'react';
//
// export class Button extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.count !== this.state.count) {
//             this.setState({
//                 count: nextProps.count
//             })
//         }
//         console.log(this.state.count)
//     }
//
//     render() {
//         return (
//             <button className='btn' onClick={this.props.onClick}>push</button>
//         )
//     }
// }

export const Button = (props)=>{
    return <button className='btn' onClick={props.onClick}>{props.text}</button>;
};

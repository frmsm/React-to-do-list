import React from 'react';

// export class Text extends Component {
//     render() {
//         return(
//             <input type='text' placeholder='enter text' />
//         )
//     }
// }

export const Text = (props) => {
    return <input type='text' placeholder='enter text' value = {props.value} onChange={props.onChange} />
};
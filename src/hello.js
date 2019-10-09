import React, { Component } from 'react';
import './hello.css';
// class Hello extends Component {
//     render() {
//         return (
//             <div className='f1 tc'>
//                 <h1> Hello World 101 </h1>
//                 <div>{this.props.greeting}</div>
//             </div>
//         );
        
//     }
// }
//  don't have to extends the compnoent if the compnent doesn't need state
const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1> Hello World 101 </h1>
            <div>{props.greeting}</div>
        </div>
    );      
}

export default Hello;
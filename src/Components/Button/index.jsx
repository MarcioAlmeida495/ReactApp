import { Component } from 'react';
import './styles.css'


export class Button extends Component{
    render() {
        const {onClick, text} = this.props;
        return(
            <button className='myButton' onClick={onClick} >{text}</button>
        )
    }
}

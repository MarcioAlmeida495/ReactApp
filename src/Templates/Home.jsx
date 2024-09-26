import './styles.css'
import { Component } from 'react';
import { Button } from '../Components/Button';

export class Home extends Component {
  state = {
    counter: 0
  }
 

  handleClick =  () => {
    this.setState({counter : this.state.counter + 1}, ()=>{
      console.log(this.state.counter);
    });
  }
  render(){
    return (
      <div className='container' >
        <h1 >{this.state.counter}</h1>
        <Button onClick={this.handleClick} text={'Increment'} />
      </div>
    )
  }
}
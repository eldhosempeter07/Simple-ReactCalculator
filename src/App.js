import React, { Component } from 'react';
import Buttons from './components/Buttons';
import './components/css/style.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      previous:[],
      current:''   
    }
  }
  reset=()=>{
    this.setState({
      current:0
    })
  }
  
  addToCurrent=(symbol)=>{
    this.setState({
      current:this.state.current+symbol
    });
  }
render(){
  const buttons=[
    {symbol:'C',cols:3,action:this.reset},
    {symbol:'/',cols:1,action:this.addToCurrent},
    {symbol:'7',cols:1,action:this.addToCurrent},
    {symbol:'8',cols:1,action:this.addToCurrent},
    {symbol:'9',cols:1,action:this.addToCurrent},
    {symbol:'X',cols:1,action:this.addToCurrent},
    {symbol:'4',cols:1,action:this.addToCurrent},
    {symbol:'5',cols:1,action:this.addToCurrent},
    {symbol:'6',cols:1,action:this.addToCurrent},
    {symbol:'-',cols:1,action:this.addToCurrent},
    {symbol:'1',cols:1,action:this.addToCurrent},
    {symbol:'2',cols:1,action:this.addToCurrent},
    {symbol:'3',cols:1,action:this.addToCurrent},
    {symbol:'+',cols:1,action:this.addToCurrent},
    {symbol:'0',cols:2,action:this.addToCurrent},
    {symbol:'.',cols:1,action:this.addToCurrent},
    {symbol:'=',cols:1,action:this.addToCurrent},
  
  ]
  
  return (
    <div className='App'>
      <input className='result' value={this.state.current}/>
      {buttons.map((button,i)=>{
        return<Buttons key={i} symbol={button.symbol} cols ={button.cols} action={(symbol)=>button.action(symbol)}/>
      })}
    </div>
  );
}
}
export default App;

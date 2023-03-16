import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';
import ReducerSample from './components/ReducerSample';
import InputComponent from './todocomponent/InputComponent';
import Todolist from './todocomponent/Todolist';

export interface todo{
  id:number
  isDone:boolean;
  todo:string;
}
type Action =
  {type: "ADDTODO"; payload:todo}|{type:"DELTODO"; id:number}|{type:"TOGGLETODO";id: number;}


function reducer(state:todo[],action:Action):todo[]{
  switch(action.type){
      case "ADDTODO":
          return [
            ...state,
            action.payload];
      case "DELTODO":
          return state.filter(e=>e.id !== action.id);
      case "TOGGLETODO":
        return state.map(li=>li.id === action.id ? {...li,isDone:!li.isDone}:li);
  
      default:
          return state
  }
}


function App() {
  const [state,dispatch] = useReducer(reducer,[])
  const addTodo = (todo:string)=>{
    const newtodo = {
      id:state.length+1,
      isDone:false,
      todo:todo
    }
    dispatch({type:"ADDTODO",payload:newtodo})
  }

  const deltodo = (id:number)=>{
    dispatch({type:"DELTODO",id})
  }

  const toggletodo = (id:number)=>{
    dispatch({type:"TOGGLETODO",id})
  }

  // const onClick = (name:string)=>{
  //   console.log(name)
  // }
  return (
    <div className="App">
      <InputComponent addTodo={addTodo}/>
      <Todolist todo={state} deltodo={deltodo} toggletodo={toggletodo} />
      {/* <Hello name='안녕하세요' message='hahahahahahaha' onNameClick={onClick}/>
      <CounterReducer/>
      <MyForm/>
      <ReducerSample/> */}

    </div>
  );
}

export default App;

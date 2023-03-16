import React from 'react';
import { todo } from '../App';

interface Prop{
    todo:todo[];
    deltodo:(id:number)=>void
    toggletodo:(id:number)=>void;
}

const Todolist = ({todo,deltodo,toggletodo}:Prop) => {
    return (
        <ul>
            {todo.map(li=><li key={li.id} style={{color: li.isDone? "red":"black"}}><span onClick={()=>toggletodo(li.id)}>{li.todo}</span><button onClick={()=>deltodo(li.id)}>X</button></li>)}
        </ul>
    );
};

export default Todolist;
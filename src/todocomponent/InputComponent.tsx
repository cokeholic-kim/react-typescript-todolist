import React, { useState } from 'react';

interface Prop{
    addTodo:(todo:string)=>void
}

const InputComponent = ({addTodo}:Prop) => {
    const [input,setinput] = useState("")
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput(e.target.value)
    }
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addTodo(input)
        setinput("")
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
            </form>
        </div>
    );
};

export default InputComponent;
import React, { useReducer } from 'react';
type Color = "red"|"yellow"|"blue";
interface State{
    count:number;
    text:string;
    color: Color // "red"|"yellow"|"blue"
    isGood:boolean;
}
type Action  = {type:'SET_COUNT'; count:number;} | {type:'SET_TEXT';text:string}| {type:'SET_COLOR';color:Color}|
                {type:'TOGGLE_GOOD'}
function reducer(state:State,action:Action):State{
    switch(action.type){
        case "SET_COUNT":
            return{
                ...state,
                count:action.count
            }
        case "SET_TEXT":
            return {
                ...state,
                text:action.text
            }
        case "SET_COLOR":
            return{
                ...state,
                color:action.color
            }
        case "TOGGLE_GOOD":
            return{
                ...state,
                isGood:!state.isGood
            }
        default:
            return state
    }
}

const ReducerSample = () => {
    const [state,dispatch] = useReducer(reducer,{
        count:0,
        text:"목요일",
        color:"red",
        isGood: true
    })
    const setcount = () => dispatch({type:"SET_COUNT",count:2})
    const settext = ()=>dispatch({type:"SET_TEXT",text:"하하하"})
    const setColor = () => dispatch({type:"SET_COLOR",color:"yellow"})
    const togglegood = () => dispatch({type:"TOGGLE_GOOD"})
    return (
        <div>
            <div>
                <p>count : {state.count}</p>
                <p>text : {state.text}</p>
                <p>color : {state.color}</p>
                <p>isGood : {state.isGood ? 'true':'false'}</p>
            </div>
            <div>
                <button onClick={setcount}>set_count</button>
                <button onClick={settext}>set_text</button>
                <button onClick={setColor}>set_color</button>
                <button onClick={togglegood}>toggle_good</button>
            </div>
        </div>
    );
};

export default ReducerSample;
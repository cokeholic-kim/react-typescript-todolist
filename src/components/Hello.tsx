import React from 'react';

interface HelloProps {
    name:string,
    message:string,
    onNameClick:(name:string) => void
}

const Hello = ({name,message,onNameClick}:HelloProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Hello;
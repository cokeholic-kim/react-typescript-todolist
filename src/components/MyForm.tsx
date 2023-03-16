import React, { useState } from 'react';

const MyForm = () => {
    const [formData,setFormData] = useState({
        name:"",
        desc:""
    })
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    //submit버튼 클릭할때 실행
    const onSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" value={formData.name} onChange={onChange}/>
                <input/>
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default MyForm;
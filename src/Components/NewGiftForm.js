import { useState } from "react"

const apiURL = 'https://shower-api.onrender.com';

export const GiftForm = ()=>{
    const [inputDict, setInputDict] =  useState({name: '', number: ''});
    const editInput = (event)=>{
        const { name, value }= event.target;
        setInputDict((previousData)=>({...previousData, [name]:value}))
    }

    const sumbitForm = (event)=>{
        event.preventDefault();
        fetch(`${apiURL}/add-gift`, {
            method:'post',
            body: JSON.stringify({
                name:inputDict.name,
                number:inputDict.number
            }),    
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            }
        )
        .then(alert('A cachete, agregamos un elemento a la lista.'))
    }

    const keyPress = (event)=>{
        if(event.keyCode==='Enter'){
            return (sumbitForm)
        }
    }

    return(
        <>
            <p>Inserte información sobre un nuevo regalo</p>
            <form method="post" className="input-form">
                <label>Descripción</label>
                <input type="text" value={inputDict.name} onChange={editInput} 
                onKeyDown={keyPress} name="name" className="text-input"/><br/>
                <label>Número de elementos deseados</label>
                <input type="text" value={inputDict.number} onChange={editInput}
                name="number" className="text-input"/><br/>
                <input type="button" value="Agregar" onClick={sumbitForm} className="button"/>
            </form>
        </>
    )
}
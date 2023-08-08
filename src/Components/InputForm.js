import { useEffect, useState } from "react"

const apiURL = 'https://shower-api.onrender.com';
export const InForm = ()=>{

    const [optionsState, setOptionsState] = useState([]);
    const [inputState, setInputState] = useState({name:"",lastName:"",companyNo:"",giftID:""});
    const [amountState, setAmountState] = useState({});

    useEffect(()=>{
        fetch(`${apiURL}/read-gifts`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then(res=>{
            return(res.json())
        })
        .then(data=>{
            let index = 0;
            let optionsArray = [];
            data.forEach(element => {
                let ident = element.id;
                optionsArray.push(<option key={index} value={ident}>{element.nombre}</option>);
                index++;
                setAmountState((previous)=>({...previous, [ident]:element.cantidad}))
            });
            setOptionsState(optionsArray);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    const changeInput = (event)=>{
        const { name, value } = event.target;
        setInputState((previousState)=>({...previousState, [name]:value}))
    }
    const pressButton = (event)=>{
        event.preventDefault();
        fetch(`${apiURL}/add-user`,{
            method:'post',
            body: JSON.stringify({
                name:inputState.name,
                lastName:inputState.lastName,
                companyNo:inputState.companyNo,
                giftID:inputState.giftID
            }),    
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }   
        )
        .then(()=>{
            console.log('ID:', inputState.giftID, 'cantidad: ', amountState[inputState.giftID]);
            fetch(`${apiURL}/update-gifts`,{
                method:'post',
                body: JSON.stringify({
                    id:inputState.giftID,
                    amount:(amountState[inputState.giftID]-1)
                }),    
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })   
        })
        .then(()=>{
            alert("¡Muchas gracias! Ya confirmamos su asistencia.")
        })
        .catch(err=>{
            console.error(err);
        }) 
    }
    return(
        <>
            <h2>¡Bienvenid@!</h2>
            <p>Nos estamos preparando para recibir a Leonardo próximamente y queremos que nos acomapañe
                para este momento tan especial. Para confirmar su asistencia al té, por favor ingrese
                su información en los siguientes espacios. ¡Nos vemos!
            </p>
            <form method="post" className="input-form">
                <label>Nombre</label>
                <input type="text" name="name" onChange={changeInput}/><br/>
                <label>Apellido</label>
                <input type="text" name="lastName" onChange={changeInput}/><br/>
                <label>Número de acompañantes</label>
                <input type="text" name="companyNo" onChange={changeInput}/><br/>
                <label>La siguiente lista tiene una sugerencia de regalos. Podés elegir uno o seleccionar "otro."</label><br/>
                <select name="giftID" onChange={changeInput}>
                    {optionsState}
                </select><br/>
                <input type="button" className="button" value="Confirmar"
                onClick={pressButton}/>
            </form>
        </>
    )
}

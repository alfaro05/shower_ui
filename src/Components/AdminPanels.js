import { useEffect, useState } from "react"
import { GiftForm } from "./NewGiftForm"

const apiURL = 'https://shower-api.onrender.com';

export const PeoplePanel =()=>{
    const [peopleRows, setRows] = useState([]);
    useEffect(()=>{
        fetch(`${apiURL}/read-info`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            console.log(data);
            let auxArray = peopleRows;
            data.forEach(element => {
                auxArray.push(
                <>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                    <td>{element.regalo}</td>
                </>)
            });
            setRows(auxArray);
        })
        .then(()=>{
            console.log(peopleRows);
        })
    })
    return(
        <>aqui va la gente</>
    )
}

export const GiftsPanel =()=>{
    useEffect(()=>{

    })
    return(
        <>aqui van los regalos</>
    )
}

export const NewGiftForm =()=>{
    useEffect(()=>{

    })
    return(
        <GiftForm/>
    )
}
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
            let auxArray = peopleRows;
            data.forEach(element => {
                auxArray.push(
                <tr>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                    <td>{element.regalo}</td>
                </tr>)
            });
            setRows(auxArray);
            console.log(auxArray);
        })
        .then(()=>{
            console.log(peopleRows);
        })
    })
    return(
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Regalo</th>
            </tr>
            {peopleRows}
        </table>
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
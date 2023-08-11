import { useEffect, useState } from "react"
import { GiftForm } from "./NewGiftForm"

const apiURL = 'https://shower-api.onrender.com';

const TableRows = ({ fetchedRows })=>{
    //includes the rows of the table and the logic
    //for "loading" status
    return(
        <>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Regalo</th>
            </tr>
            {fetchedRows}
        </>
    )
}

export const PeoplePanel =({count})=>{
    //contains table tag and fetch logic
    const [peopleRows, setRows] = useState([]);
    const [loadedStatus, setLoadedStatus] = useState(false);
    useEffect(()=>{
        console.log(count.guests, count.forms, count);
        fetch(`${apiURL}/read-info`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            let auxArray = [...peopleRows];
            data.forEach(element => {
                auxArray.push(
                <tr>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                    <td>{element.regalo}</td>
                </tr>)
            });
            setRows(auxArray);
        })
        .then(()=>{
            setLoadedStatus(true);
            console.log(peopleRows);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])
    return(
        
        <table className="results-table">
            {loadedStatus?<TableRows fetchedRows={peopleRows}/>:"Cargando..."}
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
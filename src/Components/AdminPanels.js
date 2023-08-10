import { useEffect, useState } from "react"
import { GiftForm } from "./NewGiftForm"

const apiURL = 'https://shower-api.onrender.com';

export const PeoplePanel =({showPpl})=>{
    //contains table tag and fetch logic
    const [peopleRows, setRows] = useState([]);
    const [loadedStatus, setLoadedStatus] = useState(false);
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
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])
    return(
        
        <table className="results-table">
            {loadedStatus?<tableRows fetchedRows={peopleRows}/>:"Cargando..."}
            
        </table>
    )
}

export const tableRows = ({ fetchedRows })=>{
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
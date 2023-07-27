import { useState } from "react"
import { GiftsPanel, NewGiftForm, PeoplePanel } from "./AdminPanels";

const adminPassword = process.env.adminPassword || '1234';

export const AdminForm = ()=>{
    const [inputState, setInputState] = useState('');
    const [showPanelState, setPanelState] = useState(false);

    const editInput = (event)=>{
        setInputState(event.target.value);
    }

    const onButtonClick = (event)=>{
        event.preventDefault();
        if(inputState===adminPassword){
            setPanelState(true);
        }
    }

    return(
        <>
            {showPanelState?'':<LoginForm input={inputState} edit={editInput} onButton={onButtonClick}/>}
            {showPanelState?<Panel/>:''}
        </>
    )
}

const LoginForm = ({input, edit, onButton})=>{
    return(
        <form method="post" className="input-form">
            <label>Contraseña de admin:</label> <br/>
            <input type="text" value={input} onChange={edit} className="password"></input><br/>
            <input type="button" value='Ingresar' className="button" onClick={onButton}
            onSubmit={onButton}/>
        </form>
    )

}

export const Panel = ()=>{
    const [showPeople, setPeople] = useState(false);
    const [showGifts, setGifts] = useState(false);
    const [giftAddFlag, setGiftAddFlag] = useState(false);

    const peopleButton = (event)=>{
        if(showPeople){
            setPeople(false);
        } else{
            event.preventDefault();
            setPeople(true);
        }
    }
    const giftsButton = (event)=>{
        if(showGifts){
            setGifts(false);
        } else {
            event.preventDefault();
            setGifts(true);
        }
    }
    const formButton = (event)=>{
        if(giftAddFlag){
            setGiftAddFlag(false);
        } else {
            event.preventDefault();
            setGiftAddFlag(true);
        }
    }

    return(
        <>
            <p>Solo la gente crack tiene permisos de admin. ¡Bienvenid@!</p>
            <hr width="95%" color=""/>
            <div className='admin-panel'>
                <label>Invitaciones confirmadas</label>
                <input type="button" value={showPeople?'Ocultar':'Mostrar'} 
                onClick={peopleButton} className="button"/><br/>
                {showPeople?<PeoplePanel/>:""}
            </div>
            <hr width="95%" color=""/>

            <div className='admin-panel'>
                <label>Lista de regalos</label>
                <input type="button" value={showGifts?'Ocultar':'Mostrar'}
                onClick={giftsButton} className="button"/><br/>
                {showGifts?<GiftsPanel/>:""}
            </div>
            <hr width="95%" color=""/>

            <div className='admin-panel'>
                <label>Formulario para agregar regalo</label>
                <input type="button" value={giftAddFlag?'Ocultar':'Mostrar'}
                onClick={formButton} className="button"/><br/>
                {giftAddFlag?<NewGiftForm/>:""}
            </div>
            <hr width="95%" color=""/>
        </>
    )
}
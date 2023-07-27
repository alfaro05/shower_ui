import { Route, Routes } from "react-router-dom"
import { InForm } from "./InputForm"
import { AdminForm } from "./Authentication"
import { WelcPage, LocatPage } from "./Welcome"

export const BodyContents = ()=>{
    return(
        <Routes>
            <Route exact path="/" element={<FormPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/bienvenida" element={<WelcPage/>}/>
            <Route path="/ubicacion" element={<LocatPage/>}/>
        </Routes>
    )
}

const FormPage = ()=>{
    return(
        <>
            <InForm/>
        </>
    )
}

const AdminPage = ()=>{
    return(
        <AdminForm/>
    )
}
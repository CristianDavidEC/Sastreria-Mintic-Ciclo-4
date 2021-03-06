import React from 'react'
import Tabla from '../components/Tabla/Tabla'
import Input from '../components/Inputs/Input'
import NavFacturas from '../components/NavFacturas'
import { Navigate } from 'react-router-dom';

const Facturas = () => {
    var user_admin = JSON.parse(localStorage.getItem("user_admin"));
    if (user_admin === null) {
        return <Navigate to="/" />;
    }
    
    return (
        <>
            <div className="container ancho">
                <NavFacturas />
                <div>
                    <div className="row">
                        <div className="col-md-9">
                        </div>
                        <div className="col-md-3">
                            <Input placeholder="Buscar" />
                        </div>
                    </div>
                    <div className="row">
                        <Tabla/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facturas

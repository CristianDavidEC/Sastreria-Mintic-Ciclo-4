import React from 'react'
import Tabla from '../components/Tabla/Tabla'
import Input from '../components/Inputs/Input'
import NavFacturas from '../components/NavFacturas'

const Facturas = () => {
    return (
        <>
            <div class="container m-3 tabla" /*style={{width: 1060}}*/>
                <NavFacturas />
                <div class="row">
                    <div class="col-md-9">
                    </div>
                    <div class="col-md-3">
                        <Input placeholder="Buscar"/>
                    </div>
                </div>
                <div class="row">
                    <Tabla />
                </div>
            </div>
        </>
    )
}
export default Facturas

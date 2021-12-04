import React from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import NavFacturas from '../NavFacturas'
import { Form } from 'react-bootstrap'
import { addFacturaConID } from '../../apis/FacturasCRUD'

const RegistroFactura = ({ titulo }) => {
    var num = (Math.floor(Math.random() * 100001));

    //const [state, setstate] = useState(listaPrendas)

    var prendas = [];

    function save(even) {
        even.preventDefault();
        console.log(prendas);
        const obj = {
            nombre: even.target[0].value,
            numDoc: even.target[1].value,
            telefono: even.target[2].value,
            correo: even.target[3].value,
            fechaIngreso: even.target[4].value,
            estadoFactura: even.target[5].value,
            totalPagar: even.target[6].value,
            prendas: prendas,
            id: num,
        }
        addFacturaConID(obj, (res) => {
            console.log(res);
            if (res == "Factura Agregada") {
                console.log(prendas);
                alert("Factura registrada con exito");
                alert(prendas[0].id);
                window.location.href = "http://localhost:3000/facturas";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    const fecha = new Date();
    const fechaIngreso = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate() + ' ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return (
        <>
            <div className="container ancho">
                <NavFacturas />
                <div className="">
                    <h4>{titulo}</h4>
                    <div className="row">
                        <div className="col-md-4 border-end">
                            <Form onSubmit={save}>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" />
                                </Form.Group>
                                <Form.Group controlId="numDoc">
                                    <Form.Label>Número Documento</Form.Label>
                                    <Form.Control type="text" placeholder="Número Documento" />
                                </Form.Group>
                                <Form.Group controlId="telefono">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="text" placeholder="Teléfono" />
                                </Form.Group>
                                <Form.Group controlId="correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="text" placeholder="Correo" />
                                </Form.Group>
                                <Form.Group controlId="fechaIngreso">
                                    <Form.Label>Fecha Ingreso</Form.Label>
                                    <Form.Control type="text" placeholder="Fecha Ingreso" value={fechaIngreso} readOnly />
                                </Form.Group>
                                <Form.Group className="" controlId="estadoFactura">
                                    <Form.Label>Estado Factura</Form.Label>
                                    <Form.Select>
                                        <option>Seleccione</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="En espera">En espera</option>
                                        <option value="Cancelado">Cancelado</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="totalPagar">
                                    <Form.Label>Total a Pagar</Form.Label>
                                    <Form.Control type="text" placeholder="Total a Pagar" />
                                </Form.Group>
                                <button type="submit" class="btn color-p color-l mt-2">Guardar</button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <Prendas listaPrendas={prendas} />
                            <Abonos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistroFactura

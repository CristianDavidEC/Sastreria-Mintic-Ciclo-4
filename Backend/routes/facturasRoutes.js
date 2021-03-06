// Express
const express = require('express');
//Base de Datos Facuras
const db = require('../src/db/crudFacturas.js');

const router = express.Router();

//TODO: filtrar facturas por cliente

//Filtro por estado de factura
router.get('/search/:estadoFactura', (req, res) => {
    const estadoFactura = req.params.estadoFactura;
    db.searchFacturasEstadoFact(estadoFactura, function (facturas) {
        res.send(facturas);
    })
})

//TODO: filtro por fecha de factura

//Trae todas las facturas
router.get('/', (req, res) => {
    db.getFacturas(function (facturas) {
        res.send(facturas);
    });
});

//Trae la factura con un id especifico
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getOneFactura(id, function (factura) {
        res.json(factura);
    });
});

//Crea una Factura
router.post('/', (req, res) => {
    const factura = req.body;
    db.addFactura(factura, function (mensaje) {
        res.send(mensaje);
    });
});

//Crea una Factura Id
router.post('/:id', (req, res) => {
    const id = req.params.id;
    const factura = req.body;
    factura.id = id;
    db.addFacturaConID(id, factura, function (mensaje) {
        res.send(mensaje);
    });
});

//Actualiza una Factura sobreescribiendola
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const factura = req.body;
    db.actualizarFactura(id, factura, function (mensaje) {
        res.send(mensaje);
    });
});

//Modifica la factura, de manera parcial
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const factura = req.body;
    db.modificarFactura(id, factura, function (mensaje) {
        res.send(mensaje);
    });
});

//Elimina una factura
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.eliminarFactura(id, function (mensaje) {
        res.send(mensaje);
    });
});

module.exports = router;


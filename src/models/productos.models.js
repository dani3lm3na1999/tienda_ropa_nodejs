const mongoose = require('mongoose');

const tipoTalla = ['S','M','L','XL']
const tipoTela = ['Nailon', 'Algodon', 'Poliester']

const ProductosSchema = mongoose.Schema({
    nombre: {
        type: 'string',
    },
    color: {
        type: 'string',
    },
    descripcion: {
        type: 'string',
    },
    imagen: {
        type: 'string',
    },
    talla : {
        type: 'string',
        enum: tipoTalla,
    },
    tela: {
        type: 'string',
        enum: tipoTela,	
    },
    existencias: {
        type: 'string',
    },
    precio: {
        type: 'number',
    },
    torzoUrl: {
        type: 'string',
    },
    hombroUrl: {
        type: 'string',
    },
    pechoUrl: {
        type: 'string',
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria'
    }
});

module.exports = mongoose.model('productos', ProductosSchema);


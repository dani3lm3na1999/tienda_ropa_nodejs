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
        type: 'number',
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
    espaldaUrl: {
        type: 'string',
    },
    categorias: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorias'
    }
});

module.exports = mongoose.model('productos', ProductosSchema);


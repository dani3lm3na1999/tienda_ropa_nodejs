const mongoose = require('mongoose');

const tipoLogo = ['Torzo', 'Hombro', 'Espalda']

const LogoSchema = mongoose.Schema({
    url: {
        type: 'string',
    },
    tipo: {
        type: 'string',
        enum: tipoLogo,
        default: 'pendiente'
    }   
});

module.exports = mongoose.model('logos', LogoSchema);
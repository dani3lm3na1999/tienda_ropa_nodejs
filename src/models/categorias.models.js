const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    nombre: {
        type: 'string',
    }    
});

module.exports = mongoose.model('categorias', CategoriaSchema);
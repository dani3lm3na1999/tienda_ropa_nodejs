const categoriaModel = require('../models/categorias.models');

exports.crearCategoria = async (req, res) => {
    try {
        var categoriaDTO = req.body;
        var categoria = new categoriaModel(categoriaDTO);

        await categoria.save();

        return res.status(200).send(categoria);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }

};

exports.obtenerCategorias = async (req, res) => {
    try {
        var categorias;
        categorias = await categoriaModel.find();

        return res.status(200).send(categorias);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};
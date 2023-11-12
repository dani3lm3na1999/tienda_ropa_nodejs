const productosModel = require('../models/productos.models');


exports.crearProducto = async (req, res) => {
    try {
        //
        var productoDTO = req.body;
        var producto = new productosModel(productoDTO);

        await producto.save();
        res.status(200).send(producto);
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        var productos;
        productos = await productosModel.find()
                    .populate('categoria');

        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
}
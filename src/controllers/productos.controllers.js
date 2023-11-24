const productosModel = require('../models/productos.models');
const multerConfig = require('../utils/multerConfig.utils')
const multer = require('multer')

const uploads = multer(multerConfig).array('url', 1);

exports.fileUpload = (req, res, next) => {
    try {
        uploads(req, res, function(error){
            if (error){
                res.json({message: error});
            }
            return next();
        });
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
};

exports.crearProducto = async (req, res) => {
    try {
        //
        var productoDTO = req.body;

        var urlImagen = `/uploads/${req.files[0].filename}`;

        var producto = new productosModel(productoDTO);

        producto.imagen = urlImagen;

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
                            .populate({
                                path: "categorias", 
                                select: "nombre -_id",
                                options: { strictPopulate: false }
                            });

        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
}

exports.obtenerProductosByCategoria = async (req, res) => {
    try {
        var categoriaId = req.params.id;
        var productos;
        productos = await productosModel.find({categorias: categoriaId})
                            .populate({
                                path: "categorias", 
                                select: "nombre -_id",
                                options: { strictPopulate: false }
                            });

        return res.status(200).send(productos);
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
}

exports.obtenerProductosById = async (req, res) => {
    try {
        var productoId = req.params.id;
        var productos;
        productos = await productosModel.findById({_id: productoId})
                            .populate({
                                path: "categorias", 
                                select: "nombre",
                                options: { strictPopulate: false }
                            });
        return res.status(200).send(productos);
    } catch (error) {
        res.status(500).send('Ocurrio un error' + error);
    }
}


exports.eliminarProducto = async (req, res) => {    
    try {
        var productoId = req.params.id; 
        const productos = await productosModel.findOneAndDelete({ _id: productoId });

        if (!productos) {
            return res.status(404).send('No se encontró el producto');
        }

        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send('Ocurrió un error' + error);
    }
}
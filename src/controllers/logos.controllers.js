const logosModel = require('../models/logos.models');
const multerConfig = require('../utils/multerConfig.utils')
const multer = require('multer')

const uploads = multer(multerConfig).array('url', 1);

exports.fileUpload = (req, res, next) => {
    uploads(req, res, function(error){
        if (error){
            res.json({message: error});
        }
        return next();
    });
};

exports.crearLogo = async (req, res) => {
    try {
        var logoDTO = req.body;

        var urlImagen = `http://localhost:9000/uploads/${req.files[0].filename}`;

        var logo = new logosModel({
            url: urlImagen,
            tipo: logoDTO.tipo
        });

        await logo.save();

        return res.status(200).send(logo);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};

exports.obtenerLogos = async (req, res) => {
    try {
        //
        var logos;
        logos = await logosModel.find();

        return res.status(200).send(logos);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};

exports.obtenerLogoFiltrados = async (req, res) => {
    try {
        var tipologo = req.params.tipo;
        var logos;
        logos = await logosModel.find({tipo: tipologo});

        return res.status(200).send(logos);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};

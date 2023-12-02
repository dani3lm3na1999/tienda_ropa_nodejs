const logosModel = require('../models/logos.models');

exports.crearLogo = async (req, res) => {
    try {
        var logoDTO = req.body;
        var logo = new logosModel(logoDTO)
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
        logos = await logosModel.find({ tipo: tipologo });

        return res.status(200).send(logos);
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};

exports.obtenerLogoFiltradosPorId = async (req, res) => {
    try {
        const idLogo = req.params.id;
        const logo = await logosModel.findById(idLogo);

        if (!logo) {
            return res.status(404).send('Logo no encontrado');
        }

        return res.status(200).send(logo); // Cambiado de logos a logo
    } catch (error) {
        return res.status(500).send('Ocurrio un error' + error);
    }
};
;



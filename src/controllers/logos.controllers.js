const logosModel = require('../models/logos.models');

exports.crearLogo = async (req, res) => {
    try {
        var logoDTO = req.body;
        var logo = new logosModel(logoDTO);

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
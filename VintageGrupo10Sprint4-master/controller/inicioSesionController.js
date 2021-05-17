let productos = require('../data/datosProductos')

let inicioSesionController = {

    index: (req,res) => {
        res.render('inicio-sesion')
    }
}

module.exports = inicioSesionController
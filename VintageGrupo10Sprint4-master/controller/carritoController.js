let productos = require('../data/datosProductos')

let carritoController = {

    index: (req,res) => {
        res.render('carrito')
    }
}

module.exports = carritoController
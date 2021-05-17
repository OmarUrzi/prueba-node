let productos = require('../data/datosProductos')

let homeController = {

    leerTodos: (req, res) => {
        res.render('index', {productos})
    }

}

module.exports = homeController
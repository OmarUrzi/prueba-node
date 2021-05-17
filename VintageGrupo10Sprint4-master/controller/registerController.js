let productos = require('../data/datosProductos')

let registroController = {

    leerTodos: function() {
        console.log('leo productos desde data registro')
        return productos
    }
}

module.exports = registroController
let productos = require('../model/jsonDataBase');
let products = require('../data/productos.json')

let productModel = productos('productos');

let productController = {
    listar: (req, res) =>{
        let productos = productModel.all();
        res.render('listadoProductos', {productos})
    },
    edit: (req, res) => {
        let product = productModel.find(req.params.id);
        if(product){
            res.render('edit', { product })
        }   
    },
    detail: (req, res) => {
        let product = productModel.find(req.params.id)
        console.log(product)
        res.render('detail-product', { product })
    },
    create: (req, res) => {
        res.render('create')
    },
    store: (req, res)=>{
            const product = req.body;
            product.image = req.file ? req.file.filename : '';
            productModel.create(product);
            res.redirect('/productos/listar')
    },
    update: (req, res) =>{
        let  product = req.body;
        product.id = req.params.id;
        product.image = req.file ? req.file.filename : req.body.oldImagen;
        if (req.body.image===undefined) {
            product.image = product.oldImage
        }
        delete product.oldImage;
        productModel.update(product);
        res.redirect('/')
    },
    destroy: (req, res) => {
        productModel.delete(req.params.id); 
        res.redirect('/productos/listar')
    }
    
}

module.exports = productController
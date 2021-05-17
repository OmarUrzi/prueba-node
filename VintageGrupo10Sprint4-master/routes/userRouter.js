const express = require('express');

const router = express.Router();
const multer = require('multer');
const userController = require('../controller/userController');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, path.join(__dirname, '../public/img/imageUser'))
    },
    filename: (req, res, cb)=>{
        const newFileName = 'usuario ' +  Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }
});
const upload = multer({storge: storage});

router.get('/registro', upload.single('imagenUsuario'),userController.register);
router.get('/inicio-sesion', userController.login);

module.exports = router












//router.get('/admintable', userController.table)
//router.get('/adminlistar', userController.listar)






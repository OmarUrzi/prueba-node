const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const puerto = process.env.PORT
const logMiddleware = require('./middlewares/logMiddleware')
const methodOverride = require('method-override');

app.use(express.static('public'));

const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const carritoRouter = require('./routes/carritoRouter');
const userRouter = require('./routes/userRouter');


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logMiddleware)


app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', homeRouter);
app.use('/productos', productRouter);
app.use('/carrito', carritoRouter);
app.use('/users', userRouter);
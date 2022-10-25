const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const myconn = require('express-myconnection');

const app = express();

const routesMesas = require('./routesMesas.js')
const routesEmpleados = require('./routesEmpleados.js')
const routesMenu = require('./routesMenu.js')
const routesPedido = require('./routesPedido.js')

app.set('port', process.env.PORT || 3050);
const dbOptions = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'db_restaurant'
}

//Middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome to APY from Restaurant');
})

app.use('/mesas',routesMesas)
app.use('/empleados', routesEmpleados)
app.use('/comida', routesMenu)
app.use('/orden', routesPedido)

//Server running
app.listen(app.get('port'), ()=>{
    console.log('Server runnig on port', app.get('port'))
})
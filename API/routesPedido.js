const express = require('express');
const routes = express.Router();

//TB_ESTADO_PEDIDO---------------
routes.get('/estadopedido', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_estado_pedido', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/estadopedido', (req, res) => {
    req.getConnection((err, conn) => {
        const {estado_pedido} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_estado_pedido (estado_pedido) VALUES (?)', [estado_pedido] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/estadopedido/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_estado_pedido WHERE id_estado_pedido = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/estadopedido/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {estado_pedido} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_estado_pedido set estado_pedido = ? WHERE id_estado_pedido = ?', [estado_pedido, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})


//TB_PEDIDO--------------------
routes.get('/pedido', (req,res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tb_pedido', (err, rows) =>{
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/pedido', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_menu, id_estado_pedido, cantidad, fecha ,id_empleado, id_mesa, fecha_asignacion, hora_asignacion} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_pedido (id_menu, id_estado_pedido, cantidad, fecha, id_empleado, id_mesa, fecha_asignacion, hora_asignacion) VALUES (?,?,?,?,?,?,?,?)', [id_menu, id_estado_pedido, cantidad, fecha ,id_empleado, id_mesa, fecha_asignacion, hora_asignacion] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/pedido/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_pedido WHERE id_pedido= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/pedido/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_menu, id_estado_pedido, cantidad, fecha, id_empleado, id_mesa, fecha_asignacion, hora_asignacion} = req.body
        const {id} = req.params
        if (err) return res.send(err)
        conn.query('UPDATE tb_pedido set id_menu = ?, id_estado_pedido = ?, cantidad = ?, fecha = ?, id_empleado = ?, id_mesa = ?, fecha_asignacion = ?, hora_asignacion = ? WHERE id_pedido = ?', [id_menu, id_estado_pedido, cantidad, fecha, id_empleado, id_mesa, fecha_asignacion, hora_asignacion, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})


module.exports = routes
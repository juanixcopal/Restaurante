const express = require('express');
const routes =  express.Router();

//TB_GRUPO_EMPLEADO-----------------------

routes.get('/grupoempleado', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_grupo_empleado', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/grupoempleado', (req, res) => {
    req.getConnection((err, conn) => {
        const {nombre_grupo} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_grupo_empleado (nombre_grupo) VALUES (?)', [nombre_grupo] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/grupoempleado/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_grupo_empleado WHERE id_grupo_empleado = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/grupoempleado/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {nombre_grupo} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_grupo_empleado set nombre_grupo = ? WHERE id_grupo_empleado = ?', [nombre_grupo, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})


//TB_EMPLEADO---------------------
routes.get('/empleado', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_empleado', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/empleado', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_grupo_empleado, nombre_empleado, apellido_empleado, dni_empleado} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_empleado (id_grupo_empleado, nombre_empleado, apellido_empleado, dni_empleado) VALUES (?,?,?,?)', [id_grupo_empleado, nombre_empleado,apellido_empleado, dni_empleado] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/empleado/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_empleado WHERE id_empleado= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/empleado/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_grupo_empleado, nombre_empleado, apellido_empleado, dni_empleado} = req.body
        const {id} = req.params
        if (err) return res.send(err)
        conn.query('UPDATE tb_empleado set id_grupo_empleado = ?, nombre_empleado = ?, apellido_empleado = ?, dni_empleado = ? WHERE id_empleado = ?', [id_grupo_empleado, nombre_empleado, apellido_empleado, dni_empleado, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes
const express = require('express');
const routes = express.Router();

//TB_GRUPO_COMIDA------------------
routes.get('/grupocomida', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_grupo_comida', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/grupocomida', (req, res) => {
    req.getConnection((err, conn) => {
        const {tipo_comida} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_grupo_comida (tipo_comida) VALUES (?)', [tipo_comida] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/grupocomida/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_grupo_comida WHERE id_grupo_comida = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/grupocomida/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {tipo_comida} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_grupo_comida set tipo_comida = ? WHERE id_grupo_comida = ?', [tipo_comida, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

//TB_MENU

routes.get('/menu', (req,res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tb_menu', (err, rows) =>{
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/menu', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_grupo_comida, nombre_comida, precio, descripcion} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_menu (id_grupo_comida, nombre_comida, precio, descripcion) VALUES (?,?,?,?)', [id_grupo_comida, nombre_comida, precio, descripcion] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/menu/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_menu WHERE id_menu= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/menu/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {id_grupo_comida, nombre_comida, precio, descripcion} = req.body
        const {id} = req.params
        if (err) return res.send(err)
        conn.query('UPDATE tb_menu set id_grupo_comida = ?, nombre_comida = ?, precio = ?, descripcion = ? WHERE id_menu = ?', [id_grupo_comida, nombre_comida, precio, descripcion, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes
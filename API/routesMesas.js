const express = require('express');
const routes = express.Router();


//TB_ESTADO_MESA------------------------------
routes.get('/estadomesa', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_estado_mesa', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/estadomesa', (req, res) => {
    req.getConnection((err, conn) => {
        const {estado_mesa} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_estado_mesa (estado_mesa) VALUES (?)', [estado_mesa] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/estadomesa/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_estado_mesa WHERE id_estado_mesa = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/estadomesa/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {estado_mesa} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_estado_mesa set estado_mesa = ? WHERE id_estado_mesa = ?', [estado_mesa, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

//TB_PLANTA------------------------------

routes.get('/planta', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_planta', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/planta', (req, res) => {
    req.getConnection((err, conn) => {
        const {planta} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_planta (planta) VALUES (?)', [planta] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/planta/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_planta WHERE id_planta= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/planta/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {planta} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_planta set planta = ? WHERE id_planta = ?', [planta, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})


//TB_MESA------------------------------
routes.get('/mesa', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_mesa', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/mesa', (req, res) => {
    req.getConnection((err, conn) => {
        const {numero_mesa, id_planta, id_estado_mesa} = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_mesa (id_planta, id_estado_mesa, numero_mesa) VALUES (?,?,?)', [id_planta, id_estado_mesa,numero_mesa] , (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.delete('/mesa/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_mesa WHERE id_mesa= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/mesa/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const {numero_mesa} = req.body
        const {id} = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_mesa set numero_mesa = ? WHERE id_mesa = ?', [numero_mesa, id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes
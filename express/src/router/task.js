const express = require('express')
const db = require('../database')


const router = express.Router()


router.post('/',async (req,res)=>{
    let body = req.body
    // console.log(body)

    try{
        let sql = 'INSERT INTO tasks(name,type,status,assign,ob, date, due_date) values(?, ?, ?, ?,?,?,?)'
        await db.promise().query(sql,[body.name,body.type,body.status,body.assign,body.ob,])
        res.json({message:'New data was added'})

    }catch(err){
        console.log(err)
    }
   
})
router.get('/',async (req,res)=>{

    const [data] = await db.promise().query('select * from tasks')
    res.json(data)
})

router.put('/',async (req,res)=>{
    let body = req.body
    // console.log(body)

    try{
        let sql = `UPDATE tasks SET name = '${body.name}', type=?, status=?, assign=?, ob=? WHERE id = ?`
        const [result]= await db.promise().execute(sql,[,body.type,body.status,body.assign,body.ob, body.id])
        res.json({result})

    }catch(err){
        console.log(err)
    }
   
})
router.delete('/:id',async (req,res)=>{

    const [data] = await db.promise().query('DELETE tasks WHERE id=?',req.params.id)
    res.json(data)
})

module.exports = router
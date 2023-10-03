const express = require('express')
var  bodyParser = require('body-parser');
var  cors = require('cors');
const app = express()
const port = 3000
const User = require("./router/users")
const Task = require('./router/task')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
  next();
})
app.use('/api/users', User)
app.use('/api/tasks', Task)




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
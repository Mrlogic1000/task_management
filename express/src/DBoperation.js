const con = require('./database')


const getUsers =  ()=>{  
  
  let sql = "SELECT * FROM users";
  const [data] = con.query(sql)
  return  data
}
 

module.exports = {
  getUsers: getUsers
}
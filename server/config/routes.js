const users = require('./../controllers/users.js')

module.exports = (app) =>{
  app.get('/', users.index)
  app.post('/register', users.register)
}

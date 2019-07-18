
import Users from './../controllers/users.js';


module.exports = function(app){
    app.post('/userCreate', Users.createUser);
   
}
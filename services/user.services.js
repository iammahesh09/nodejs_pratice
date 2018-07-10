const User = require('../models/user.model');

class userService{
    registration(data){
        let _user = new User(data);
        return _user.save();        
    }

    login(data){
        return User.findOne({username:data},{_id:0, password:1}).exec()
    }
}
 
module.exports = new userService();
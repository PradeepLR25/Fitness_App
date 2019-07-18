import mongoose from 'mongoose';
import validator from 'validator';
import lodash from 'lodash';
var Users = mongoose.model('Users');







module.exports = {

    createUser: function(req, res) {
        function  validateInput(data) {
        let errors = {};

        if (validator.isEmpty(data.email)) {
            errors.email = "Required Field Format eg.(id@domain.com)";
           
        }
        if (validator.isEmpty(data.password)) {
            errors.password = "Required Field";
        }
        if (validator.isEmpty(data.cnfPassword)) {
            errors.cnfPassword = "Required Field";
        }
        if (validator.isEmpty(data.Institution)) {
            errors.Institution = "Required Field";
        }
        if (validator.isEmpty(data.userFirstName)) {
            errors.userFirstName = "Required Field";
        }
        if (validator.isEmpty(data.userLastName)) {
            errors.userLastName = "Required Field";
        }
        if (validator.isEmpty(data.title)) {
            errors.title = "Required Field";
        }
        return {
            errors,
            isValid: lodash.isEmpty(errors)
        }
    }


        const { errors, isValid } = validateInput(req.body);

        if(!isValid) {
            
            console.log(errors);
            console.log("hiIs this it? ")
            res.status(400).json(errors);
            // res.status(400).send(errors);
        }
        else{
            console.log("redOne")
        }

    //     console.log(req.body.email);
    //     Users.findOne({email: req.body.email}).exec(function(err, foundUser){
    //     if (foundUser){
    //         console.log(foundUser+"!!!!!!");

    //     }else{
    //         console.log(req.body.email+"***");
    //         console.log(req.body.email+"$$$$");
    //     var newUser = new Users(req.body);
    //     newUser.save(function(err, savedUser){
    //         if(err){
    //             console.log("something went wrong");
    //             res.json(err);
    //         }else{
    //             console.log("created user");
    //             res.json(savedUser);
    //         }
    //     });
    //     }
    // });
}
    
}

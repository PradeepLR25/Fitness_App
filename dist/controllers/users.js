'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = _mongoose2.default.model('Users');

module.exports = {

    createUser: function createUser(req, res) {
        function validateInput(data) {
            let errors = {};

            if (_validator2.default.isEmpty(data.email)) {
                errors.email = "Required Field Format eg.(id@domain.com)";
            }
            if (_validator2.default.isEmpty(data.password)) {
                errors.password = "Required Field";
            }
            if (_validator2.default.isEmpty(data.cnfPassword)) {
                errors.cnfPassword = "Required Field";
            }
            if (_validator2.default.isEmpty(data.Institution)) {
                errors.Institution = "Required Field";
            }
            if (_validator2.default.isEmpty(data.userFirstName)) {
                errors.userFirstName = "Required Field";
            }
            if (_validator2.default.isEmpty(data.userLastName)) {
                errors.userLastName = "Required Field";
            }
            if (_validator2.default.isEmpty(data.title)) {
                errors.title = "Required Field";
            }
            return {
                errors: errors,
                isValid: _lodash2.default.isEmpty(errors)
            };
        }

        var _validateInput = validateInput(req.body);

        const errors = _validateInput.errors,
              isValid = _validateInput.isValid;


        if (!isValid) {

            console.log(errors);
            console.log("hiIs this it? ");
            res.status(400).json(errors);
            // res.status(400).send(errors);
        } else {
            console.log("redOne");
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

};
//# sourceMappingURL=users.js.map
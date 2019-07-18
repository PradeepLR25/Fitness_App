'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = _mongoose2.default.Schema({
    userId: String,
    userFirstName: String,
    userLastName: String,
    password: String,
    Institution: String,
    email: String,
    title: String,
    created: Date
});

_mongoose2.default.model('Users', UserSchema);
//# sourceMappingURL=users.js.map
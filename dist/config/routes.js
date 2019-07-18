'use strict';

var _users = require('./../controllers/users.js');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.post('/userCreate', _users2.default.createUser);
};
//# sourceMappingURL=routes.js.map
'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

require('babel-polyfill');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _issue = require('./issue.js');

var _issue2 = _interopRequireDefault(_issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();


// console.log(Users);

const app = (0, _express2.default)();
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());
require('./config/mongoose.js');
// require('./config/routes.js')(app);

// if (process.env.NODE_ENV !== 'production'){
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');

//     const config = require('../webpack.config');
//     config.entry.app.push('webpack-hot-middleware/client',
//     'webpack/hot/only-dev-server');
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());

//     const bundler = webpack(config);
//     app.use(webpackDevMiddleware(bundler, { noInfo: true }));
//     app.use(webpackHotMiddleware(bundler, { log: console.log }))
// }


var Users = require('./controllers/users.js');

let db;

app.get('/api/issues', (req, res) => {
  db.collection('issues').find().toArray().then(issues => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues });
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.post('/userCreate', Users.createUser);

// (req, res) => {
//   const newIssue = req.body;
//   newIssue.created = new Date();
//   if (!newIssue.status) {
//     newIssue.status = 'New';
//   }

//   const err = Issue.validateIssue(newIssue);
//   if (err) {
//     res.status(422).json({ message: `Invalid request: ${err}` });
//     return;
//   }

//   db.collection('issues').insertOne(Issue.cleanupIssue(newIssue)).then(result =>
//     db.collection('issues').find({ _id: result.insertedId }).limit(1)
//     .next()
//   )
//   .then(savedIssue => {
//     res.json(savedIssue);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).json({ message: `Internal Server Error: ${error}` });
//   });
// }


app.listen(3000, () => {
  console.log('App started on port 3000');
});
//# sourceMappingURL=server.js.map
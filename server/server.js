import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
import 'babel-polyfill';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import Issue from './issue.js';





// console.log(Users);

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
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
  db.collection('issues').find().toArray()
  .then(issues => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues });
  })
  .catch(error => {
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

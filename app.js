var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var routes = require('./routes/route');
var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var app = express();
//连接数据库
mongoose.connect('mongodb://localhost/studio');
// 设置模板引擎
app.set('port', 7777);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//  日志中间件
app.use(logger('dev'));
//  解析post
app.use(multipart());
//  json解析中间件
app.use(bodyParser.json());
//  解析urlencoded请求体中间件
app.use(bodyParser.urlencoded({ extended: true }));
//  解析cookie中间件
app.use(cookieParser());
//  静态文件目录
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use(session({
    secret: 'studio',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
        url: 'mongodb://localhost/studio',
        collection: 'sessions',
        cookie: {
            masAge: 1000 * 60 * 60 * 24
        }
    })
}));

//  路由
routes(app);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(app.get('port'), function() {
   console.log('express server listening on port '+ app.get('port'));
});

module.exports = app;

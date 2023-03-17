var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter   = require('./routes/index');
var usersRouter   = require('./routes/user');
var companyRouter = require('./routes/company');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const routes = {
  users: usersRouter,
  company: companyRouter
};

// We define the standart REST API for each route ( if they exist )
for (const [routeName, routeController] of Object.entries(routes)) {
    if(routeController.getAll) {
      app.get(
        `/api/${routeName}`,
        makeHandlerAwareOfAsyncErrors(routeController.getAll)
      );
    }
    if(routeController.getById) {
      app.get(
        `/api/${routeName}/:id`,
        makeHandlerAwareOfAsyncErrors(routeController.getById)
      );
    }
    if(routeController.create) {
      app.post(
        `/api/${routeName}`,
        makeHandlerAwareOfAsyncErrors(routeController.create)
      );
    }
    if(routeController.update) {
      app.put(
        `/api/${routeName}/:id`,
        makeHandlerAwareOfAsyncErrors(routeController.update)
      );
    }
    if(routeController.remove) {
      app.delete(
        `/api/${routeName}/:id`,
        makeHandlerAwareOfAsyncErrors(routeController.remove)
      );
    }  
}

/* --  Error handler -- */
function makeHandlerAwareOfAsyncErrors(handler) {
  return async function(req, res, next){
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  }
}

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

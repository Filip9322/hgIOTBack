var path    = require('path');
var cors    = require('cors');
var logger  = require('morgan');
var express = require('express');
var createError  = require('http-errors');
var cookieParser = require('cookie-parser');

var indexRouter      = require('./routes/index');
var usersRouter      = require('./routes/API/user');
var companiesRouter  = require('./routes/API/company');
var rolesRouter      = require('./routes/API/roles');
var userRolesRouter  = require('./routes/API/user_roles');
var userWAreasRouter = require('./routes/API/user_wide_areas');
var userLAreasRouter = require('./routes/API/user_local_areas');
var userRegLogin   = require('./routes/login');
var userRegLogout  = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register, Login and Authenticate User
app.use(cors());
app.use('/login', userRegLogin);
app.use('/logout', userRegLogout);
// API routes
const routes = {
  users: usersRouter,
  companies: companiesRouter,
  roles: rolesRouter,
  user_roles: userRolesRouter,
  user_wide_areas: userWAreasRouter,
  user_local_areas: userLAreasRouter
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

module.exports = {
  "development": {
    "username":process.env.MYSQL_USER_DATABASE,
    "password":process.env.MYSQL_USER_PASSWORD,
    "database":process.env.MYSQL_DATABASE,
    "host":    process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test" = {
    "username":process.env.MYSQL_USER_DATABASE,
    "password":process.env.MYSQL_USER_PASSWORD,
    "database":process.env.MYSQL_DATABASE,
    "host":    process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username":process.env.MYSQL_USER_DATABASE,
    "password":process.env.MYSQL_USER_PASSWORD,
    "database":process.env.MYSQL_DATABASE,
    "host":    process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
};

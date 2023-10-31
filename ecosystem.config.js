modules.exports = {
  apps: [
      {
        name: 'Express BackEnd',
        script: './index.js',
        env_development: {
          PORT: process.env.PORT,
          NODE_ENV: "development"
        }
      }
    ]
}
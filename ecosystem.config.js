module.exports = {
  apps: [
    {
      name: "koni-app",
      script: "npm",
      args: "start",
      env: {
          APP_ENV: "production"
      }
    }
  ]
};

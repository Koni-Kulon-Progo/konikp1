module.exports = {
  apps: [
    {
      name: "koni-app",
      script: "npm",
      args: "start",
      env: {
      DATABASE_URL: "postgres://postgres:postgres@103.117.57.202/konikp1",
      APP_ENV: "production",
      SECRET:"bestSecretKey69",
      },
    },
  ],
};

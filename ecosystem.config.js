module.exports = {
<<<<<<< HEAD
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
=======
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
>>>>>>> e423d33fb680d5d3b0fe5b159229ff452bf11321
};

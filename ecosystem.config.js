module.exports = {
    apps: [
        {
            name: "nextjs-app",
            script: "npm",
            args: "start",
            instances: "1",

            autorestart: true,
            restart_delay: 5000,
            max_restarts: 10,

            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};
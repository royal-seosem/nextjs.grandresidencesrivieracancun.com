module.exports = {
    apps: [
        {
            name: "nextjs-app",
            script: "npm",
            args: "start",
            instances: "1",
            watch: false,
            max_memory_restart: "200M",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};
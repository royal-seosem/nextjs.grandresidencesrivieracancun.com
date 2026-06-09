module.exports = {
    apps: [
        {
            name: "nextjs-app",
            script: "npm",
            args: "start",
            instances: "1",
            watch: false,
            max_memory_restart: "200M",

            // --- Logs ---
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            error_file: "./logs/error.log",
            out_file: "./logs/out.log",
            merge_logs: true,

            // --- Reinicio automático con backoff ---
            autorestart: true,
            restart_delay: 5000,        // espera 5s antes de reiniciar
            max_restarts: 10,           // máximo 10 reinicios antes de marcar como "errored"
            min_uptime: "30s",          // si cae antes de 30s, cuenta como crash

            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};
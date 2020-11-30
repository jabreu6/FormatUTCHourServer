module.exports = {
    port: process.env.PORT || 8080, // puerto donde correra la aplicación
    database: process.env.DB_NAME || "ahorraqui",
    db:  process.env.DATABASE_URL || "postgres://postgres:postgres@127.0.0.1:5432/",
    driver: "postgres"
};

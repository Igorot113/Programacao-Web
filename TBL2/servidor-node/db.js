const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'meubanco',
    password: '1307',
    port: '5432',
});

module.exports = pool;
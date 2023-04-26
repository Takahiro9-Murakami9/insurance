require('dotenv').config({ path: '../.env' });

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

};

const pgp = require("pg-promise")();
const db = pgp(process.env.CONN_STRING);

module.exports = { pgp, db };

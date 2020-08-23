require('dotenv').config();

const configSV = {
    hostname: process.env.HOSTNAME,
    port: process.env.PORT
}

module.exports = { configSV };
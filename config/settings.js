require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY || 'clave_secreta_por_defecto',
    API_URL: process.env.API_URL || 'https://tucoapplicationservice.transunion.co/ws/v1/rest/consultarCombo'
};

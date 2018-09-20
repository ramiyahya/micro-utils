const cors = require('micro-cors');
const TECHNOBROS_URL = 'https://technobros.net';

const withCors = cors({
    origin: TECHNOBROS_URL
});

module.exports = {
    withCors
};

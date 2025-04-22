// Proxy api endpoint for Vercel serverless functions
const requestHandler = require('../server');

module.exports = (req, res) => {
    // Pass to the common request handler
    return requestHandler(req, res);
}; 
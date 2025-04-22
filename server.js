const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Create server handler compatible with both http server and serverless functions
const requestHandler = (req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Handle the root path
    let filePath = req.url === '/' 
        ? path.join(__dirname, 'index.html')
        : path.join(__dirname, req.url);
    
    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    // Read file and serve response
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                    if (err) {
                        // If 404 page doesn't exist, send text response
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('404 Not Found');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
};

// Check if this is being run directly or imported
if (require.main === module) {
    // Create standalone HTTP server (for local development)
    const server = http.createServer(requestHandler);
    
    // Start the server
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        console.log(`On your mobile device, connect to your computer's IP address:${PORT}`);
    });
} else {
    // Export for serverless use (Vercel)
    module.exports = requestHandler;
} 
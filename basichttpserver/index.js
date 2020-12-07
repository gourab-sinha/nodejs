const http = require('http');
const port = 8000;
const fs = require('fs'); 

// request handler
function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    // fs.readFile('index.html', function(err, data){ also works
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log('Error', err);
            return res.end('<h1>Error</h1>');
        }
        
        return res.end(data);
    });
    
    // res.end("<h1>Gotch!</h1>");
}

const server = http.createServer(requestHandler);


server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: " + port);
});
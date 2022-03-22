const port = 3000,
http = require("http"),
fs = require('fs');

httpStatus= require("http-status-codes"),
fs.readFile('./index.html', function(err, html) {
    if (err){
        throw err;    }
    app= http.createServer((request, response) => {
    console.log("Received an incoming request!");                                                                                                                                                                                           
    response.writeHead(httpStatus.StatusCodes.OK, {                                                                                                                                                                                         
        "Content-Type": "text/html"                                                                                                                                                                                                         
    })                                                                                                                                                                                                                                      
    response.write(html);     
    response.end()
    app.listen(port)                                                                                                                                                                                                                           
    console.log(                                                                                                                                                                                                                                
    `the server has started and is litening on port number: =${port}`                                                                                                                                                                       
);                                                                                                                                                                                    
})
});                                                                                                                                                                                                                                     

                                                                      
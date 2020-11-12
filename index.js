let express = require('express');
let app = express();
app.use('/', express.static('public'));


let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);


})

let io = require('socket.io')();
io.listen(server);

io.sockets.on('connection', function(socket) {
    console.log("We have a new client: " + socket.id);


    socket.on('msg', function(data) {
        console.log("Received a 'msg' event");
        console.log(data);

        io.sockets.emit('msg', data);
    });

    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
    })

});
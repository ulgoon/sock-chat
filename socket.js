module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user is now connected');

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
            console.log("message: ", msg);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    });
};
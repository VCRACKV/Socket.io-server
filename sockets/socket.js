const {io} = require('../index');

io.on('connection', client => {
    console.log("Conectado");
    client.on('disconnect', () => { console.log("Desconectado") });

    client.on('mensaje', (payload) => {
        console.log("Mensaje!!", payload['nombre']);
        io.emit('mensaje', {admin: "Nuevo mensaje"})
    })
});
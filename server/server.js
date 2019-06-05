'use strict';

const PORT = process.env.PORT || 3000;

const socketServer = require('socket.io')(PORT);
const events = require('../utils/events.js');

socketServer.on('connection', socket => {
  console.log('Socket connected', socket.id);
  
  socket.on(events.error, error => {
    socketServer.emit(events.received, error);
  });

  socket.on(events.save, message => {
    socketServer.emit(events.received, message);
  });
});
'use strict';

const events = require('../utils/events.js');
const constants = require('../utils/constants.js');
const socketIOClient = require('socket.io-client');

const socket = socketIOClient.connect(constants.SERVER_URL);

socket.on(events.received, message => {
  console.log(message);
});
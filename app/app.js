'use strict';

const readWrite = require('../utils/read-write.js');
const events = require('../utils/events.js');
const constants = require('../utils/constants.js');
const socketIOClient = require('socket.io-client');

const socket = socketIOClient.connect(constants.SERVER_URL);

/**
 * alterFile(file)
 * @param {*} file - File to read, uppercase, and write
 */
async function alterFile(file) {
  const data = await readWrite.read(file);
  const text = readWrite.uppercase(data);
  const message = await readWrite.write(file, text);
  console.log(message);
  socket.emit(events.save, message);
}

let file = process.argv.slice(2).shift();

alterFile(file)
  .catch(err => {
    console.log(err);
    socket.emit(events.error, err);
  });

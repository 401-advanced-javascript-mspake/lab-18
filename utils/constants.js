'use strict';

const PORT = process.env.PORT || 3000;

/**
 * Constants Module
 * @module utils/constants
 * @exports Object - Object containing constants that are needed in more than one file
 */

module.exports = {
  SERVER_URL: `http://localhost:${PORT}`,
};
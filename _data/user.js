const fetch = require('node-fetch');
const config = require('./config.json');

module.exports = async () => {
  const response = await fetch(`https://api.github.com/users/${config.username}`);
  return response.json();
}

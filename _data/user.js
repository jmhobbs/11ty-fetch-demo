const EleventyFetch = require('@11ty/eleventy-fetch');
const config = require('./config.json');

module.exports = async () => {
  return EleventyFetch(`https://api.github.com/users/${config.username}`, {
    duration: "7d",
    type: "json",
  });
}

const normalizeUrl = require('normalize-url');
const douyu = require('./douyu');
const twitch = require('./twitch');
const panda = require('./panda');

module.exports = (url, cb) => {
  url = normalizeUrl(url);

  if (url.match(/douyu/)) {
    douyu(url, cb);
  } else if (url.match(/twitch/)) {
    twitch(url, cb);
  } else if (url.match(/panda/)) {
    panda(url, cb);
  } else {
    return cb('link not recognized');    
  }
};

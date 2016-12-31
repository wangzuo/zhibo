const request = require('request');
const clientId = process.env.TWITCH_CLIENT_ID || '';

module.exports = (url, cb) => {
  const m = url.match(/twitch\.tv\/(.*)/);
  const apiUrl = `https://api.twitch.tv/kraken/streams/${m[1]}?client_id=${clientId}`;
  request.get(apiUrl, (err, resp, body) => {
    if (err) return cb(err);
    const data = JSON.parse(body);

    if (data.stream) {
      cb(null, { live: true });
    } else {
      cb(null, { live: false });
    }
  });
};

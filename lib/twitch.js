const request = require('request');
const clientId = process.env.TWITCH_CLIENT_ID || '';

module.exports = (url, cb) => {
  const m = url.match(/twitch\.tv\/(.*)/);
  const apiUrl = `https://api.twitch.tv/kraken/streams/${m[1]}?client_id=${clientId}`;

  request.get(apiUrl, (err, resp, body) => {
    if (err) return cb(err);

    const data = JSON.parse(body);

    request.get(`${data._links.channel}?client_id=${clientId}`, (err, resp, body) => {
      if (err) return cb(err);

      const channel = JSON.parse(body);

      cb(null, {
        id: `twitch:${channel._id}`,
        streamer: channel.display_name,
        channelName: channel.status,
        avatar: channel.logo,
        cover: data.stream ? data.stream.preview.large : null,
        live: data.stream != null,
        ts: Date.now(),
      });
   });
 });
};

const request = require('request');

module.exports = (url, cb) => {
  const m = url.match(/panda\.tv\/(.*)/);
  const apiUrl = `http://www.panda.tv/api_room_v2?roomid=${m[1]}`;
  request.get(apiUrl, (err, resp, body) => {
    if (err) return cb(err);
    const { data } = JSON.parse(body);

    cb(null, { live: data.videoinfo.status === '2' });
  });
};

const request = require('request');

module.exports = (url, cb) => {
  request.get(url, (err, resp, body) => {
    if (err) return cb(err);

    const m = body.match(/var\s+\$ROOM\s+=\s+(.*);\s*\$ROOM\.args/);
    if (m) {
      const room = JSON.parse(m[1]);
      return cb(null, { 
        live: room.show_status === 1
      });
    }
  });
};


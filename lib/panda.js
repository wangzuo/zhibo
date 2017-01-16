const request = require('request');

module.exports = (url, cb) => {
  const m = url.match(/panda\.tv\/(.*)/);
  const apiUrl = `http://www.panda.tv/api_room_v2?roomid=${m[1]}`;

  request.get(apiUrl, (err, resp, body) => {
    if (err) return cb(err);
    const { data } = JSON.parse(body);
    const { hostinfo, roominfo } = data;

    cb(null, {
      id: `panda:${roominfo.id}`,
      streamer: hostinfo.name,
      channelName: roominfo.name,
      avatar: hostinfo.avatar,
      cover: roominfo.pictures.img,
      live: data.videoinfo.status === '2',
      ts: Date.now(),
    });
  });
};

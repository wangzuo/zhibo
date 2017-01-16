#!/usr/bin/env node

const zhibo = require('./lib');
const url = process.argv[2];

zhibo(url, (err, info) => {
  if (info.live) {
    console.log(`${url} is live`);
  } else {
    console.log(`${url} is not live`);
  }

  console.log(JSON.stringify(info, 2, ' '));
});

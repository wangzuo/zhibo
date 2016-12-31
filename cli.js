#!/usr/bin/env node

const zhibo = require('./lib');
const url = process.argv[2];

zhibo(url, (err, { live }) => {
  if (live) {
    console.log(`${url} is live`);
  } else {
    console.log(`${url} is not live`);
  }
});

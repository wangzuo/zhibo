#!/usr/bin/env node

const zhibo = require('./lib');
const url = process.argv[2];

zhibo(url, (err, info) => {
  console.log(JSON.stringify(info, 2, ' '));
});

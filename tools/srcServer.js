import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
console.log('Starting the dev web server...');

const options = {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  contentBase: './src',
  stats: { colors: true }
};

const server = new WebpackDevServer(webpack(config), options);

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
});

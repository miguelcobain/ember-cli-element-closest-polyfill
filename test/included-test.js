/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const request = require('request-promise-native');

describe('Include polyfill', function() {
  this.timeout(400000);

  let app;

  before(async function() {
    app = new AddonTestApp();
    await app.create('included');
    await app.startServer({ command: 'serve' });
  });

  after(async function() {
    await app.stopServer();
  });

  it('includes polyfill for IE', async function() {
    let response = await request('http://localhost:49741/assets/vendor.js');
    expect(response).to.contain('element-closest');
  });
});

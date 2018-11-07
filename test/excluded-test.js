/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const request = require('request-promise-native');

describe('Exclude polyfill', function() {
  this.timeout(400000);

  let app;

  before(async function() {
    app = new AddonTestApp();
    await app.create('excluded');
    await app.startServer();
  });

  after(function() {
    return app.stopServer();
  });

  it('skips polyfill for modern browsers', async function() {
    let response = await request('http://localhost:49741/assets/vendor.js');
    expect(response).to.not.contain('element-closest.js');
  });
});

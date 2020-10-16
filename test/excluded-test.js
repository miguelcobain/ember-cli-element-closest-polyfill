/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const fetch = require('node-fetch');

const POLYFILL_CONTENT = require('./polyfill-content');

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
    let response = await fetch('http://localhost:49741/assets/vendor.js');
    let body = await response.text();
    expect(body).to.not.contain(POLYFILL_CONTENT);
  });
});

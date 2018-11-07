/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const fetch = require('node-fetch');

describe('Include polyfill', function() {
  this.timeout(400000);

  let app;

  before(async function() {
    app = new AddonTestApp();
    await app.create('included');
    await app.startServer();
  });

  after(function() {
    return app.stopServer();
  });

  it('includes polyfill for IE', async function() {
    let response = await fetch('http://localhost:49741/assets/vendor.js');
    let body = await response.text();
    expect(body).to.contain('element-closest');
  });
});

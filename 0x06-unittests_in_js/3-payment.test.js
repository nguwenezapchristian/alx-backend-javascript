// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const { sendPaymentRequestToApi } = require('./3-payment');
const { calculateNumber } = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call calculateNumber with SUM type and correct arguments', function () {
    const spy = sinon.spy(calculateNumber);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    console.log.restore();
  });
});

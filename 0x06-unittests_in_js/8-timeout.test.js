const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return data when success is true', function(done) {
    this.timeout(5000); // 5 seconds timeout
    getPaymentTokenFromAPI(true).then(response => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});

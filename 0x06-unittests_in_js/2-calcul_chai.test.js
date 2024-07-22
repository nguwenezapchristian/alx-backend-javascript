

const calculateNumber = require('./2-calcul_chai');

import('chai').then(chai => {
    const { expect } = chai;

    describe('calculateNumber', function() {
      it('should return the sum of two rounded numbers', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
    });
  });
  

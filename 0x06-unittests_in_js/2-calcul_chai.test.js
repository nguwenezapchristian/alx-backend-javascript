(async () => {
    const { expect } = await import('chai');
  
    describe('calculateNumber with chai', function() {
      it('should return the sum of two rounded numbers', function() {
        const calculateNumber = (a, b) => a + b;
        expect(calculateNumber(1.5, 2.5)).to.equal(4);
      });
    });
  })();
  
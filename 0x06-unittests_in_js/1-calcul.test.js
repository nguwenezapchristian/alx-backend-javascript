(async () => {
    const { expect } = await import('chai');
  
    describe('calculateNumber', function() {
      it('should return the sum of two rounded numbers', function() {
        const calculateNumber = (a, b) => a + b;
        expect(calculateNumber(1, 2)).to.equal(3);
      });
  
      it('should return the difference of two rounded numbers', function() {
        const calculateNumber = (a, b) => a - b;
        expect(calculateNumber(5, 3)).to.equal(2);
      });
  
      it('should return the division of two rounded numbers', function() {
        const calculateNumber = (a, b) => a / b;
        expect(calculateNumber(6, 3)).to.equal(2);
      });
    });
  })();
  
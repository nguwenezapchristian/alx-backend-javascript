(async () => {
    const { expect } = await import('chai');
  
    describe('Payment processing', function() {
      it('should process payment correctly', function() {
        const processPayment = (amount) => `Processed ${amount}`;
        expect(processPayment(100)).to.equal('Processed 100');
      });
    });
  })();
  
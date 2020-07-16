/*

// These commented function won't work because Jasmine focus
// on the unit tests and not on the DOM tests.

describe('Input Tests', () => {

  describe('Empty Fields', () => {

    const values = getCurrentUIValues();

    it('loan amount should not be empty', () => {
      expect(values.amount.not.toBeNull());
    });

    it('term should not be empty', () => {

    });

    it('interest rate should not be empty', () => {

    });
  });

  describe('Non-numeric Values', () => {
    it('loan amount should not accept non-numeric values', () => {

    });
    it('term should not accept non-numeric values', () => {

    });
    it('interest rate should not accept non-numeric values', () => {

    });
  });

  describe('Value Ranges', () => {

    it('interest rate should be greater than 0%', () => {

    });

    it('loan amount should be greater than 0', () => {

    });
    it('term should be greater than 0', () => {

    });

  });

});

*/

describe('Formula Tests', () => {

  it('should calculate the monthly rate correctly again', function() {

  });
});

describe('Format Tests', () => {
  it('should return a result with 2 decimal places', function() {

  });
});

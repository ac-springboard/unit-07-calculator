/*

// These commented functions won't work because Jasmine focus
// on the unit tests and not on the DOM tests.
// I'm temporarily keeping them just for the records
// until they're documented as future requirements.

// TODO: Implement some of these tests getting data from the 'values' variable

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
// TODO: Implement the 'alpha' test (eg. alphaAmount) for the other variables
// @formatter:off
let values = {
  normal:       { amount: "1000", years: "5", rate: "0.1",  expected: "21.25" },
  zeroRate:     { amount: "1000", years: "5", rate: "0.0",  expected: "NaN" },
  negativeRate: { amount: "1000", years: "5", rate: "-0.1", expected: "NaN" },
  alphaAmount:  { amount: "A000", years: "5", rate: "0.1",  expected: "NaN" }
}
// @formatter:on

beforeEach(function() {
  // Not used for now
});

describe('Formula Tests', () => {

  it('should calculate the monthly rate correctly', function() {
    console.log('Values:', values.normal);
    expect(calculateMonthlyPayment(values.normal)).toEqual(values.normal.expected);
  });
  it('should return error if the Interest Rate is 0', function() {
    expect(calculateMonthlyPayment(values.zeroRate)).toEqual(values.zeroRate.expected);
  });
  it('should return error if the Interest Rate is negative', function() {
    expect(calculateMonthlyPayment(values.zeroRate)).toEqual( values.negativeRate.expected);
  });
});

describe('Format Tests', () => {
  it('should return a result with 2 decimal places', function() {
    const reg = /\.\d\d$/g;
    expect( reg.test( calculateMonthlyPayment(values.normal))).toBeTruthy();
  });

  it('the result should contain only numeric digits and the decimal dot', function() {
    const reg = /^\d+\.\d\d$/g
    expect( reg.test( calculateMonthlyPayment(values.alphaAmount))).toBeFalsy();
  });
});

//
// Auxiliary Test Functions
//


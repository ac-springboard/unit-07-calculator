window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calc-form');
  if (form) {
    setupInitialValues();
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(amountElem().value
    ),
    years : +(yearsElem().value
    ),
    rate  : +(rateElem().value
    ),
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  amountElem().value = '1000';
  yearsElem().value  = '5';
  rateElem().value   = '0.12';
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const actualRate  = monthlyRate(+values.rate);
  const numerator   = +values.amount * actualRate;
  const denominator = 1 - Math.pow(1 + actualRate, -numberOfPayments(+values.years));
  return ((numerator / denominator
  ).toFixed(2)
  ).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  paymentElem().innerText = monthly;
}

//
// My auxiliary functions
//

// DOM Elements
function amountElem() {
  return document.getElementById('loan-amount');
}

function yearsElem() {
  return document.getElementById('loan-years');
}

function rateElem() {
  return document.getElementById('loan-rate');
}

function paymentElem() {
  return document.getElementById('monthly-payment');
}

// Conversions

function monthlyRate(yearlyRate) {
  return +yearlyRate / 12;
}

function numberOfPayments(years) {
  return +years * 12;
}

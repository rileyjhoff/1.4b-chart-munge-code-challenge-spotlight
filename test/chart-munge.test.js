// IMPORT MODULES under test here:
import { 
  purchaseFrequencyCount,
  coolFactorCount,
  genderCount
} from '../app.js';

const test = QUnit.test;

test('testing that purchaseFrequencyCount returns an object with a count of customer purchase frequencies', (expect) => {
//Arrange
// Set up your arguments and expectations
  const expected = {
    'Often': 126,
    'Once': 107,
    'Daily': 142,
    'Yearly': 128,
    'Monthly': 123,
    'Weekly': 122,
    'Seldom': 129,
    'Never': 123
  };

//Act 
// Call the function you're testing and set the result to a const
  const actual = purchaseFrequencyCount;

//Expect
// Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});

test('testing that coolFactorCount returns an object with a count of custom cool factors', (expect) => {
//Arrange
// Set up your arguments and expectations
  const expected = {
    '1': 109,
    '2': 119,
    '3': 99,
    '4': 101,
    '5': 93,
    '6': 102,
    '7': 101,
    '8': 99,
    '9': 82,
    '10': 95
  };

//Act 
// Call the function you're testing and set the result to a const
  const actual = coolFactorCount;

//Expect
// Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});

test('testing that genderCount returns an object with a count of customer gender', (expect) => {
//Arrange
// Set up your arguments and expectations
  const expected = {
    'Male': 448,
    'Female': 457,
    'Bigender': 14,
    'Agender': 17,
    'Non-binary': 24,
    'Genderqueer': 11,
    'Genderfluid': 18,
    'Polygender': 11
  };

//Act 
// Call the function you're testing and set the result to a const
  const actual = genderCount;

//Expect
// Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
}); 
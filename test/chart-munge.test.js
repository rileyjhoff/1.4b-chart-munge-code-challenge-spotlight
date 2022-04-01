// IMPORT MODULES under test here:
import { 
  purchaseFrequencyCount,
  coolFactorCount,
  genderCount
} from '../chart-munge.js';

const test = QUnit.test;

skip('testing that purchaseFrequencyCount returns an object with a count of customer purchase frequencies', (expect) => {
//Arrange
// Set up your arguments and expectations
  const expected = true;

//Act 
// Call the function you're testing and set the result to a const
  const actual = purchaseFrequencyCount;

//Expect
// Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});

skip('testing that coolFactorCount returns an object with a count of custom cool factors', (expect) => {
//Arrange
// Set up your arguments and expectations
  const expected = true;

//Act 
// Call the function you're testing and set the result to a const
  const actual = coolFactorCount;

//Expect
// Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});

test('testing that coolFactorCount returns an object with a count of custom cool factors', (expect) => {
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
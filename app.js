import { customerData } from './data.js';

export const purchaseFrequencyCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.purchase_frequency}`]) {
    acc[`${curr.purchase_frequency}`]++;
  } else {
    acc[`${curr.purchase_frequency}`] = 1;
  }
  return acc;
}, { });

export const coolFactorCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.cool_factor}`]) {
    acc[`${curr.cool_factor}`]++;
  } else {
    acc[`${curr.cool_factor}`] = 1;
  }
  return acc;
}, { });

export const genderCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.gender}`]) {
    acc[`${curr.gender}`]++;
  } else {
    acc[`${curr.gender}`] = 1;
  }
  return acc;
}, { });
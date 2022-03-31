// import functions and grab DOM elements
import { customerData } from './data.js';

// 1. Bar chart showing number of customers by each purchase frequency.
const purchaseFrequencyCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.purchase_frequency}`]) {
    acc[`${curr.purchase_frequency}`]++;
  } else {
    acc[`${curr.purchase_frequency}`] = 1;
  }
  return acc;
}, { });

console.log(purchaseFrequencyCount);

const labelsBar = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const dataBar = {
  labels: labelsBar,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const configBar = {
  type: 'bar',
  data: dataBar,
  options: {}
};

const myBarChart = new Chart(
  document.getElementById('myBarChart'),
  configBar
);

// 2. Line chart showing number of customers by each cool factor.
const coolFactorCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.cool_factor}`]) {
    acc[`${curr.cool_factor}`]++;
  } else {
    acc[`${curr.cool_factor}`] = 1;
  }
  return acc;
}, { });

console.log(coolFactorCount);

const labelsLine = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const dataLine = {
  labels: labelsLine,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const configLine = {
  type: 'line',
  data: dataLine,
  options: {}
};

const myLineChart = new Chart(
  document.getElementById('myLineChart'),
  configLine
);

// 3. Pie chart showing number of customers by each gender. Make sure you have enough colors in your chart data to make the pie chart readable.
const genderCount = customerData.reduce((acc, curr) => {
  if (acc[`${curr.gender}`]) {
    acc[`${curr.gender}`]++;
  } else {
    acc[`${curr.gender}`] = 1;
  }
  return acc;
}, { });

console.log(genderCount);

const labelsPie = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const dataPie = {
  labels: labelsPie,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const configPie = {
  type: 'pie',
  data: dataPie,
  options: {}
};

const myPieChart = new Chart(
  document.getElementById('myPieChart'),
  configPie
);

// Stretch Goals
// 1. Bar chart showing average cool factor of each age demographic (0 - 10, 11 - 20, 21 - 30, etc)

// 2. Line chart showing most frequent "purchase frequency" for each decade of customer demographic (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)
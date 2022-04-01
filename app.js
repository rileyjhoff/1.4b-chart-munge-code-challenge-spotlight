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

const labelsBar = Object.keys(purchaseFrequencyCount);

const dataBar = {
  labels: labelsBar,
  datasets: [{
    label: 'Number of customers by purchase frequency',
    backgroundColor: [
      '#FFB2E670', 
      '#D972FF70',
      '#FCD7AD70',
      '#5296A570',
      '#065A8270',
      '#A5754870',
      '#8CFFDA70',
      '#8447FF70'
    ],
    borderColor: [
      '#FFB2E6', 
      '#D972FF',
      '#FCD7AD',
      '#5296A5',
      '#065A82',
      '#A57548',
      '#8CFFDA',
      '#8447FF'
    ],
    borderWidth: 1,
    data: Object.values(purchaseFrequencyCount),
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

const labelsLine = Object.keys(coolFactorCount);

const dataLine = {
  labels: labelsLine,
  datasets: [{
    label: 'Number of customers by cool factor',
    backgroundColor: '#1B3B6F',
    borderColor: '#1B3B6F80',
    data: Object.values(coolFactorCount),
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

const labelsPie = Object.keys(genderCount);

const dataPie = {
  labels: labelsPie,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '#FFB2E6',
    borderColor: 'rgb(255, 99, 132)',
    data: Object.values(genderCount),
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
// import functions and grab DOM elements
import { customerData } from './data.js';

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
  type: 'line',
  data: dataBar,
  options: {}
};

const myBarChart = new Chart(
  document.getElementById('myChart'),
  configBar
);
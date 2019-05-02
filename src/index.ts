
import './styles.css';
import { ready } from './utils';
import { runApp } from './app';
console.log('Ready to Party');

ready(runApp);

const userCost = document.getElementById('userInput');
function ReCalculateTip() {
    console.log('user input is ' + userCost.nodeValue);
}


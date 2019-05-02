let tipButtons: NodeList;
let tipPercentNum: number = 20;
let billAmountNum: number;

let source: HTMLInputElement;
let billAmount: HTMLInputElement;
let tippingPercent: HTMLInputElement;
let tipPercent: HTMLInputElement;
let tipAmountToDisplay: HTMLInputElement;
let totalAmount: HTMLInputElement;
export function runApp() {
    source = document.getElementById('userInput') as HTMLInputElement;
    tippingPercent = document.getElementById('tippingPercent') as HTMLInputElement;

    billAmount = document.getElementById('billAmount') as HTMLInputElement;
    tipPercent = document.getElementById('tipPercent') as HTMLInputElement;
    tipAmountToDisplay = document.getElementById('tipAmount') as HTMLInputElement;
    totalAmount = document.getElementById('totalAmount') as HTMLInputElement;



    // set default tip percent value
    tippingPercent.innerHTML = String(tipPercentNum) + '%';
    tipPercent.innerHTML = String(tipPercentNum) + '%';

    //this is event listner when amount is changed
    source.addEventListener('input', () => {
        const amount: string = source.value;
        billAmountNum = +amount;
        if (isNaN(billAmountNum) || billAmountNum < 0) {
            source.classList.add('inputError');
            clearAmount();
        } else {
            source.classList.remove('inputError')
            calculateAndRender();
        }



    });

    //this is when tip percent is changed
    let counter: number = 1;
    tipButtons = document.querySelectorAll('.tipButton');
    tipButtons.forEach((tButton: HTMLDivElement) => {
        //default button setup
        if (counter === 3) { //this is for 20%
            tButton.classList.add('selected');
        } else {
            tButton.classList.add('unSelected');
        }
        counter++;

        tButton.addEventListener('click', () => {
            let tip = tButton.innerHTML;
            tipPercentNum = +(tip.substr(0, 2))
            tippingPercent.innerHTML = tip;
            tipPercent.innerHTML = tip;
            if (!isNaN(billAmountNum)) {
                calculateAndRender()
            }
            //unselect all the buttons
            tipButtons.forEach((iButton: HTMLDivElement) => {
                iButton.classList.remove('selected')
                iButton.classList.add('unSelected');
            });
            //then select the selected button
            tButton.classList.remove('unSelected');
            tButton.classList.add('selected');
        });

    })
}

function clearAmount() {
    tipAmountToDisplay.innerHTML = "";
    totalAmount.innerHTML = "";
    billAmount.innerHTML = "";
}

function calculateAndRender() {
    billAmount.innerHTML = (billAmountNum).toFixed(2);
    let amountOfTip: any = (tipPercentNum / 100 * billAmountNum);
    tipAmountToDisplay.innerHTML = String(amountOfTip.toFixed(2));
    totalAmount.innerHTML = String((billAmountNum + amountOfTip).toFixed(2));
    if (([1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b)) == 45) {
        alert('yes!')
    }
}








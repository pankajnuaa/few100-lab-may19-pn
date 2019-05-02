let tipButtons: NodeList;
let tipPercentNum : number = 10;
let billAmountNum : number;
// const tipAmountToDisplay;
export function runApp(){
    console.log("The app is running");     
    const source = document.getElementById('userInput') as HTMLInputElement   
    const billAmount = document.getElementById('billAmount');
    const tipAmount = document.getElementById('tippingPercent');
    const tipPercent = document.getElementById('tipPercent');
    const tipAmountToDisplay = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');
  
  //this is event listner when amount is changed
    source.addEventListener('input',()=>{
        const amount: string = source.value;
        billAmountNum = +amount;
        billAmount.innerHTML = amount;
       console.log('user input value is:'+amount);

        let amountOfTip : any = tipPercentNum/100*billAmountNum;
        tipAmountToDisplay.innerHTML = amountOfTip;
        totalAmount.innerHTML = billAmountNum + amountOfTip;

       
    });

    //this is when tip percent is changed
    tipButtons = document.querySelectorAll('.tipButton');
    tipButtons.forEach((tButton: HTMLDivElement) => {
       
        tButton.addEventListener('click', ()=>{
            let tip = tButton.innerHTML;
            tipPercentNum = +(tip.substr(0,1))
            tipAmount.innerHTML = tip;
            tipPercent.innerHTML = tip;

            let amountOfTip : any = tipPercentNum/100*billAmountNum;
            tipAmountToDisplay.innerHTML = amountOfTip;
            totalAmount.innerHTML = billAmountNum + amountOfTip;
        });
        
    })
}




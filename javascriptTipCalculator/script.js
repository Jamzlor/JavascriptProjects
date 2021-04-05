function calculateTips() {
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value / 100;
    let tipPercentageFactor = tipPercentage + 1;
    let totalAmount = billAmount * tipPercentageFactor;
    console.log(totalAmount)
    console.log(billAmount)
    console.log(tipPercentage)
    document.getElementById('tip-amount-display').innerHTML = `Tip amount: $${(billAmount * (tipPercentage)).toFixed(2)}`;
    document.getElementById('total-amount-display').innerHTML = `Total amount: $${totalAmount.toFixed(2)}`;
}
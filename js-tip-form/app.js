const billValue = document.getElementById('billValue');
const customerValue = document.getElementById('customerValue');
const serviceValue = document.getElementById('services');

const errorMessage = document.getElementById('errorMessage');
const loadingScreen = document.getElementById('loader');
const results = document.getElementById('resultContainer');

const totalTip = document.getElementById('totalTip');
const totalAmount = document.getElementById('totalAmount');
const eachPersonPrice = document.getElementById('eachPersonPrice');

const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    let bill = parseFloat(billValue.value);
    let customers = parseInt(customerValue.value);
    let service = parseFloat(serviceValue.value);
    
    console.log(bill)
    console.log(customers)
    console.log(service)

    if(!bill || !customers || service === "null"){
        errorMessage.style.display = 'flex';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    } else {
        results.style.display = 'none';
        
        totalTip.innerHTML = 'Total Tip : ' + (bill * service).toFixed(2);
        totalAmount.innerHTML = 'Total Amount due : ' + ((bill * service) + bill).toFixed(2);
        eachPersonPrice.innerHTML = 'Price Per Person : ' + (((bill * service) + bill) / customers).toFixed(2);

        loadingScreen.style.display = 'block';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            results.style.display = 'block';
        }, 2000);
        
    }
})
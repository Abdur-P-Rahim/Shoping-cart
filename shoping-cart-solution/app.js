/* 

function updateProductNumber (product, price, isCaseIncreasing){
     const productInput = document.getElementById(product + '-number');
     let productNumber = productInput.value;


     if(isCaseIncreasing == true){
          productNumber = parseInt(productNumber) + 1;
     }
     else if (productNumber > 0){
          productNumber = parseInt(productNumber) - 1;
     }

     productInput.value = productNumber;
     //case total
     const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productNumber * price;
    
     //calculate subtoal
     calculateTotal();
}


//caluclate subtotal
function getInputvalue (product){
     const productInput = document.getElementById(product + '-number');
     const productNumber = parseInt(productInput.value);
     return productNumber;
}

function calculateTotal (){
     const phoneTotal = getInputvalue ('phone') * 1219;
     const caseTotal = getInputvalue ('case') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalPrice = subTotal + tax;
     // subtotal on the html
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = totalPrice;
}




// phone
const phonePlusButton = document.getElementById('phone-plus');
phonePlusButton.addEventListener('click', function (){
     updateProductNumber('phone', 1219, true);
})

const phoneMinusButton = document.getElementById('phone-minus');
phoneMinusButton.addEventListener('click', function (){
     updateProductNumber('phone', 1219, false);
})




const casePlusButton = document.getElementById('case-plus');
casePlusButton.addEventListener('click', function (){
    updateProductNumber('case', 59, true);
})

const caseMinusButton = document.getElementById('case-minus');
caseMinusButton.addEventListener('click', function (){
     updateProductNumber('case', 59, false);
})

 */



function updateProductNumber (product, price, isProductIncreasing){
     const productInput = document.getElementById(product + '-number');
     let productNumber = productInput.value;
     

     if(isProductIncreasing == true){
          productNumber = parseInt(productNumber) + 1;
     }
     else if(productNumber > 0){
          productNumber = parseInt(productNumber) - 1;
     }
     
     productInput.value = productNumber;
     //product total
     const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productNumber * price;

     // caluculate function
     calculateTotal();
}

function getInputValue (product){
     const productInput = document.getElementById(product + '-number');
     const productNumber = parseInt(productInput.value);
     return productNumber;
}

function calculateTotal (){
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;
}



// phone plus
const phonePlusButton = document.getElementById('phone-plus');
phonePlusButton.addEventListener('click', function(){
     updateProductNumber('phone', 1219, true);
   
})

// phone minus
const phoneMinusButton = document.getElementById('phone-minus');
phoneMinusButton.addEventListener('click', function (){
     updateProductNumber('phone', 1219, false)
})

// case plus 
const casePlusButton = document.getElementById('case-plus');
casePlusButton.addEventListener('click', function(){
     updateProductNumber('case', 59, true);
})

// case minus
const caseMinusButton = document.getElementById('case-minus');
caseMinusButton.addEventListener('click', function(){
     updateProductNumber('case', 59, false);
})




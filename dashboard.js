// const depositDisplay = document.getElementById('deposit-display')
// const withdrowDisplay = document.getElementById('withdraw-display')
// const balanceDisplay = document.getElementById('balance-display')
// const withdrawInput = document.getElementById('withdraw-input')
// const depositInput = document.getElementById('deposit-input')
const depositBtn = document.getElementById('depositBtn')
const withdrawBtn = document.getElementById('withdrawBtn')



depositBtn.addEventListener('click',function(event){
    event.preventDefault()
    
    //covert and get id
    const depositInput = document.getElementById('deposit-input');
    const newDepositInput = parseFloat(depositInput.value);
    console.log(typeof newDepositInput);
  
    //covert and get id
    const depositDisplay = document.getElementById('deposit-display');
    const previousDepositString = depositDisplay.innerText;
    const previousDepositFloat = parseFloat(previousDepositString);
    console.log(typeof previousDepositFloat);
    console.log(previousDepositString);
  

    //Final display
    const currentTotal = newDepositInput + previousDepositFloat;
    depositDisplay.innerText = currentTotal;
    depositInput.value=''

    //Balance

    const balanceDisplay = document.getElementById('balance-display')
    const previousBalanceString = balanceDisplay.innerText;
    const previousBalance = parseFloat(previousBalanceString)
    
    const finalBalance = previousBalance + newDepositInput
    balanceDisplay.innerText = finalBalance

})

withdrawBtn.addEventListener('click',function(event){
    event.preventDefault()
    
    const withdrawInputStirng = document.getElementById('withdraw-input')
    const newWithdrawInput = parseFloat(withdrawInputStirng.value);
    console.log(typeof newWithdrawInput);


    const withdrowDisplay = document.getElementById('withdraw-display')
    const withdrowDisplayString = withdrowDisplay.innerText
    const previousWithdrowDisplay = parseFloat(withdrowDisplayString)
   

    const finalWithdrow = newWithdrawInput + previousWithdrowDisplay
    withdrowDisplay.innerText = finalWithdrow
    withdrawInputStirng.value=''
    

    // - balance
    const balanceDisplay = document.getElementById('balance-display')
    const previousBalanceString = balanceDisplay.innerText;
    const previousBalance = parseFloat(previousBalanceString)
    const finalBalance = previousBalance - newWithdrawInput
    balanceDisplay.innerText = finalBalance
})

//daynight

const body = document.getElementById('main-id');
const dayNight =  document.getElementById('day-night')
const titleBap =  document.getElementById('title-bap')
dayNight.addEventListener('click',function(event){
   
    if(dayNight.innerText == 'Night Mode'){
        body.style.backgroundColor= 'black'
        
        dayNight.innerText= 'Day Mode'
        titleBap.style.color = 'white'
        dayNight.style.color='white'
    }

    else{
        body.style.backgroundColor= 'white'
        dayNight.innerText= 'Night Mode'
        dayNight.style.color='black'
        titleBap.style.color = 'black'
    }
    
})
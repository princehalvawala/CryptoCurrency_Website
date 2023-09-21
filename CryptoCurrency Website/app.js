const date = () =>{
    let date_main = new Date("Dec, 09, 2023, 11:59:59");
    let current_date = new Date();

    let date_day = parseInt((date_main - current_date) /1000 /60 / 60 /24);
    let date_hour = parseInt((date_main - current_date) /1000 /60 / 60) % 24;
    let date_min = parseInt((date_main - current_date) /1000 /60) % 60;
    let date_sec = parseInt((date_main - current_date) /1000) % 60;
    
    document.getElementsByClassName('time')[0].innerHTML = `
    <span> ${date_day} <br> <h6>Days</h6></span>
    <h5>:</h5>
    <span> ${date_hour} <br> <h6>Hours</h6></span>
    <h5>:</h5>
    <span> ${date_min} <br> <h6>Minutes</h6></span>
    <h5>:</h5>
    <span> ${date_sec} <br> <h6>Seconds</h6></span>
    `
}
date();
setInterval(date,1000); // For reloading seconds timely //



// Crypto Conversion Part //

let coin_first = document.getElementById('coin-first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');


coin.addEventListener('change',()=>{
    let a = coin.value;
    coin_first.innerText = a.slice(0,1);

    if(a === "Bitcoin"){
        btc.innerText = "BTC" ;
    }
    else if(a === "Ethereum"){
        btc.innerText = "ETH" ;
    }
    else if(a === "Tether"){
        btc.innerText = "USDT" ;
    }
    else{
        btc.innerText = "BNB" ;
    }
    
})

// now for right side : gov side //

 let gov_coins = document.getElementById('gov_coins');
 let coins = document.getElementById('coins');
 let gov_coinss = document.getElementById('gov_coinss');
 
 
 coins.addEventListener('change',()=>{
     let a = coins.value;
     gov_coins.innerText = a.slice(0,1);
 
     if(a === "Dollar"){
        gov_coins.innerText = "$" ;
        gov_coinss.innerText = "USD" ;
     }
     else if(a === "Rupee"){
        
        gov_coinss.innerText = "INR" ;
        gov_coins.innerText = "Rs" ;
     }
     else if(a === "Riyal"){
        gov_coins.innerText = "S" ;
        gov_coinss.innerText = "SAR" ;
     }
     else{
       
        gov_coinss.innerText = "AED" ;
        gov_coins.innerText = "A" ;
     }
     
 }) 


let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let bitcoin_dollar = 19974.45;
let Ethereum_dollar = 1349.85;
let Tether_dollar = 1;
let bnb_dollar = 291.55;


//----- Logic for Bitcoin -------- //
crypto.addEventListener('change',()=>{
    switch ("Bitcoin") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * bitcoin_dollar;
                    break;
                           
            }  
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 81);
                    break;
                           
            }  
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.76);
                    break;
                           
            }  
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 3.67);
                    break;
                           
            }  
            break;
    
        
    }
})
// ----------------------------------------------//

// ----- Logic for Etheruem ------//
crypto.addEventListener('change',()=>{
    switch ("Ethereum") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Ethereum_dollar;
                    break;
                           
            }  
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 81);
                    break;
                           
            }  
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 3.76);
                    break;
                           
            }  
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 3.67);
                    break;
                           
            }  
            break;
    
        
    }
})

// ---------------------------------//

//------ Logic for Tether ----------- //

crypto.addEventListener('change',()=>{
    switch ("Tether") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Tether_dollar;
                    break;
                           
            }  
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 81);
                    break;
                           
            }  
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.76);
                    break;
                           
            }  
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.67);
                    break;
                           
            }  
            break;
    
        
    }
})

// --------------------------------------------//

// ---------   Logic for BNB -------------------------//

crypto.addEventListener('change',()=>{
    switch ("BNB") {
        case coin.value:
            switch ("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * bnb_dollar;
                    break;
                           
            }  
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 81);
                    break;
                           
            }  
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 3.76);
                    break;
                           
            }  
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 3.67);
                    break;
                           
            }  
            break;
    
        
    }
})

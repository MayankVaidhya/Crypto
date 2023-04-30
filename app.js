// Count Down Start

const date = () => {

    let date_main = new Date("May, 05 , 2023, 10:50:58");
    // console.log(date_main);
    let current_date = new Date();
    // console.log(current_date);
    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);
    let date_hour = parseInt((date_main - current_date) / 1000 / 60 / 60) % 24;
    let date_min = parseInt((date_main - current_date) / 1000 / 60) % 60;
    let date_sec = parseInt((date_main - current_date) / 1000) % 60;
    // console.log(date_sec);
    document.getElementsByClassName('time')[0].innerHTML = `<span id="day">${date_day} <br> <h6>DAYS</h6></span>
    <h5>:</h5>
    <span id="day">${date_hour} <br> <h6>HOURS</h6></span>
    <h5>:</h5>
    <span id="day">${date_min} <br> <h6>MINUTES</h6></span>
    <h5>:</h5>
    <span id="day">${date_sec} <br> <h6>SECONDS</h6></span>`;
}

setInterval(date, 1000);

// Crypto Converter Start

// Give
let coin_first = document.getElementById('coin_first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');

coin.addEventListener('change', ()=> {
    // console.log(coin.value);
    let a = coin.value;
    coin_first.innerText = a.slice(0, 1);

    if (a === "Bitcoin") {
        btc.innerText = "BTC";
    } else if (a === "Ethereum"){
        btc.innerText = "ETH";
    } else if (a === "Tether") {
        btc.innerText = "USDT";
    } else {
        btc.innerText = "BNB";
    }
})

// Get
let gov_coins = document.getElementById('gov_coins');
let coins = document.getElementById('coins');
let gov_coinss = document.getElementById('gov_coinss');

coins.addEventListener('change', ()=> {
    // console.log(coin.value);
    let a = coins.value;
    gov_coins.innerText = a.slice(0, 1);

    if (a === "Dollar") {
        gov_coins.innerText = "$";
        gov_coinss.innerText = "USD";
    } else if (a === "Rupee"){
        gov_coins.innerText = "Rs";
        gov_coinss.innerText = "INR";
    } else if (a === "Riyal") {
        gov_coins.innerText = "SR";
        gov_coinss.innerText = "SAR";
    } else {
        gov_coins.innerText = "A";
        gov_coinss.innerText = "AED";
    }
})

// Value Input

let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let bitcoin_dollor = 1997.45;
let Ethereum_dollor = 1349.85;
let Tether_dollor = 1;
let bnb_dollor = 291.55;

crypto.addEventListener('change', ()=> {
    switch ("Bitcoin") {
        case coin.value:
            switch ("Dollor") {
                case coins.value:
                    gov.value = (crypto.value) * bitcoin_dollor;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollor * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollor * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollor * 3.67);
                    break;
            }
            break;
    }
})

crypto.addEventListener('change', ()=> {
    switch ("Ethereum") {
        case coin.value:
            switch ("Dollor") {
                case coins.value:
                    gov.value = (crypto.value) * Ethereum_dollor;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollor * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollor * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollor * 3.67);
                    break;
            }
            break;
    }
})

crypto.addEventListener('change', ()=> {
    switch ("Tether") {
        case coin.value:
            switch ("Dollor") {
                case coins.value:
                    gov.value = (crypto.value) * Tether_dollor;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollor * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollor * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollor * 3.67);
                    break;
            }
            break;
    }
})

crypto.addEventListener('change', ()=> {
    switch ("BNB") {
        case coin.value:
            switch ("Dollor") {
                case coins.value:
                    gov.value = (crypto.value) * bnb_dollor;
                    break;
            }
            switch ("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollor * 81);
                    break;
            }
            switch ("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollor * 3.76);
                    break;
            }
            switch ("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollor * 3.67);
                    break;
            }
            break;
    }
})

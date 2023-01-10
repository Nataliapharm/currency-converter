let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let euro = 4.70;
let usd = 4.48;
let gbp = 5.44;




formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount / euro;
            break;
        case "USD":
            result = amount / usd;
            break;
        case "GBP":
            result = amount / gbp;
            break;


    }
    resultElement.innerText = `${amount}PLN = ${result.toFixed(2)} ${currency}`;

});

function convert() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let result = 0;
    if ( fromCurrency === "USD" && toCurrency === "VND"){
        result = amount * 23000 + " " + toCurrency;
    }
    else
        if (fromCurrency === "VND" && toCurrency === "USD"){
            result = amount / 23000 + " " + toCurrency;
        }
        else {
            result = "Choose currency again"
        }
        document.getElementById("result").innerText = result;
}
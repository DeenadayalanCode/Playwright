type PaymentMethod = "UPI" |"CreditCard"|"PayPal";
function makePayment(method:PaymentMethod) {
    console.log(`Payment Method Type chosen : ${method}`);
}

//Valid Payment Method
makePayment("UPI");
//Valid Payment Method
makePayment("CreditCard");
//Valid Payment Method
makePayment("PayPal");
//Invalid Payment Method
//makePayment("CASH");

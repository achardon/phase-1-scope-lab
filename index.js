var customerName = 'bob';

//const upperCaseCustomerName = (customerName) => customerName.toUpperCase();

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'sally';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'susan';
}
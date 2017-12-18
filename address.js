var num = [1344,2099,3111];
var street = ['celtic street','melvin ave','via arbolada'];
var city = ['granada hills','northridge','los angeles'];
var state =['CA','NY','TX'];
var zip = [23424,98980,64646]
var address = num[Math.round(Math.random() * (num.length - 1))] +' ' +street[Math.round(Math.random() * (street.length - 1))] +' '+city[Math.round(Math.random() * (city.length - 1))] +', '+state[Math.round(Math.random() * (state.length - 1))] + ' '+zip[Math.round(Math.random() * (zip.length - 1))];
console.log(address);

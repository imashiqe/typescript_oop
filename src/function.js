//  normal function 
//  default  pparameter
function add(num1, num2) {
    return num1 + num2;
}
var addArrow = function (num1, num2) { return num1 + num2; };
var arr = [1, 4, 5];
var newArray = arr.map(function (elem) { return elem * elem; });
var person = {
    name: 'Mezba',
    balance: 5,
    addBalance: function (money) {
        return "My New Balance is ".concat(this.balance + money);
    },
};

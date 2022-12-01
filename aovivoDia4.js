function bigger (num1, num2) {
    if (num1 > num2) {
       return 'O maior é o: ' + num1;
    } else if (num1 === num2) {
        return 'Empate: ' + num1;
    } else {
        return 'O maior é o: ' + num2;
    }
}

console.log(bigger(9, 9));
console.log('');
console.log('-------------------');


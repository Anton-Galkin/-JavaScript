// Задание 5

'use strict';

let arg1, arg2;

/**
 * Калькулятор 2х чисел
 * @param {number} arg1 любое число
 * @param {number} arg2 любое число
 * @param {string} operation оператор ['+', '-', '*', '/']
 * @returns {number} результат
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
            break;
        case '-':
            return difference(arg1, arg2);
            break;
        case '*':
            return multiplication(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
        default:
            console.log('Аргумент "operation" не определен.')
    }
}

let result_5_1 = mathOperation(3, 2, '+')
console.log(result_5_1)

let result_5_2 = mathOperation(3, 2, '-')
console.log(result_5_2)

let result_5_3 = mathOperation(3, 2, '*')
console.log(result_5_3)

let result_5_4 = mathOperation(3, 2, '/')
console.log(result_5_4)

let result_5_5 = mathOperation(3, 2, '>')
console.log(result_5_5)
// Задание 4

'use strict';

let a, b;

/**
 * Функция сложения 2х чисел
 * @param {number} a любое число
 * @param {number} b любое число
 * @returns {number} сумма чисел
 */
function sum(a, b) {
    return (a + b);
}

/**
 * Функция разности 2х чисел
 * @param {number} a любое число
 * @param {number} b любое число
 * @returns {number} разность чисел
 */
function difference(a, b) {
    return (a * b);
}

/**
 * Функция умножения 2х чисел
 * @param {number} a любое число
 * @param {number} b любое число
 * @returns {number} произведение чисел
 */
function multiplication(a, b) {
    return (a * b);
}

/**
 * Функция деления 2х чисел
 * @param {number} a  делимое, любое число
 * @param {number} b делитель, любое число не равное 0
 * @returns {number} частное чисел
 */
function division(a, b) {
    if (b === 0) {
        console.log('Делитель не может быть равен 0!');
    }
    return (a / b);
}

let result_1 = sum(2, 5)
console.log(result_1)

let result_2 = difference(2, -5)
console.log(result_2)

let result_3 = multiplication(-2, 5)
console.log(result_3)

let result_4 = division(2, 5)
console.log(result_4)

let result_5 = division(2, 0)
console.log(result_4)
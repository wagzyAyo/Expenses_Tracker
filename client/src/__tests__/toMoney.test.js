import { test, expect } from "vitest";
import { toMoney } from "../utils/utils";




test('Convert int to string comma seperated money form', ()=>{
    expect(toMoney(3000)).toBe('3,000')
});


test('Convert negative int to string comma separated money form', () => {
    expect(toMoney(-5000)).toBe('-5,000');
});


test('Convert floating point number to string comma separated money form', () => {
    expect(toMoney(5000.75)).toBe('5,001');
});


test('Convert large int to string comma separated money form', () => {
    expect(toMoney(1000000)).toBe('1,000,000');
});


test('Convert zero to string comma separated money form', () => {
    expect(toMoney(0)).toBe('0');
});


test('Convert string input to string comma separated money form', () => {
    expect(toMoney('abc')).toBe('0');
});


test('Convert null input to string comma separated money form', () => {
    expect(toMoney(null)).toBe('NaN');
});


test('Convert undefined input to string comma separated money form', () => {
    expect(toMoney(undefined)).toBe('0');
});

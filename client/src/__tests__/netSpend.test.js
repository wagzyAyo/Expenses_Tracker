import { test, expect } from "vitest";
import { netSpend } from "../utils/utils";


test('Calculate net spend from empty array', () => {
    expect(netSpend([])).toBe(0);
});


test('Calculate net spend from array with single object', () => {
    const data = [{ amount: 100 }];
    expect(netSpend(data)).toBe(100);
});


test('Calculate net spend from array with multiple objects', () => {
    const data = [{ amount: 50 }, { amount: 75 }, { amount: 100 }];
    expect(netSpend(data)).toBe(225);
});


test('Return 0 for non-array input', () => {
    expect(netSpend("not an array")).toBe(0);
});


test('Ignore objects without amount property', () => {
    const data = [{age: 2}, { amount: 50 }, { name: 'item' }, { amount: 100 }];
    expect(netSpend(data)).toBe(150);
});


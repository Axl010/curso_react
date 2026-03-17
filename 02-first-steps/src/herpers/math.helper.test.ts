import { expect, test, describe } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("add", () => {
    test('shoul add two positives numbers', () => {

        // ! 1. Arrage
        const a = 1;
        const b = 3;
    
        // ! 2. Act
        const result = add(a, b);
    
        // 3. Assert
        expect(result).toBe(a + b);
    })
});

describe("subtract", () => {
    test('shoul add two positives numbers', () => {

        // ! 1. Arrage
        const a = 1;
        const b = 3;
    
        // ! 2. Act
        const result = subtract(a, b);
    
        // 3. Assert
        expect(result).toBe(a - b);
    })
});

describe("multiply", () => {
    test('shoul multiplay two negative numbers', () => {

        // ! 1. Arrage
        const a = -2;
        const b = -4;
    
        // ! 2. Act
        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});

describe("subtract", () => {
    test('shoul divide two positives numbers', () => {

        // ! 1. Arrage
        const a = 2;
        const b = 4;
    
        // ! 2. Act
        const result = divide(a, b);
    
        // 3. Assert
        expect(result).toBe(a / b);
    })
});
import { expect, test, describe } from "vitest";
import { add } from "./math.helper";

describe("subtract", () => {
    test('shoul add two positives numbers', () => {

        // ! 1. Arrage
        const a = 1;
        const b = 3;
    
        // ! 2. Act
        const result = add(a, b);
    
        // 3. Assert
        expect(result).toBe(a + b);
    })
})
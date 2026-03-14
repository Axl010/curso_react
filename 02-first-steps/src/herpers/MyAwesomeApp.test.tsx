import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "../MyAwesomeApp";

describe('MyAwesomeApp', () => {

    test('should render firstname and lastName', () => {
        render(<MyAwesomeApp />);
        screen.debug();
    });

    // Snapshot con Vitest
    test('Should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    // Snapshot con screen
    test('should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
})
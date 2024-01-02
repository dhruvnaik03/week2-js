
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        console.error("Error: Cannot divide by zero.");
        return null;
    }
}

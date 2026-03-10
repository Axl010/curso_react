interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: {
        postalCode: number;
        city: string;
    };
}

const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: 1123213,
        city: "New York"
    }
}

console.log(ironman);
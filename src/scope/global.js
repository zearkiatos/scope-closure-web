var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const getHello = () => {
    return hello;
};


const getWorld = () => {
    return world;
};


const getHelloWorld = () => {
    return helloWorld;
};

const setHello = (value) => {
    hello = value;
}

export {
    getHello,
    getWorld,
    getHelloWorld,
    setHello
}
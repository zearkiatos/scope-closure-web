var scope = "I am global";
const helloWorld = () => {
  const hello = "Hello World";
  return hello;
};

const functionScope = () => {
  var scope = "I am just a local";
  const fn = () => scope;
  return fn();
};

const getGlobalScope = () => {
    return scope;
}

export { helloWorld, functionScope, getGlobalScope };

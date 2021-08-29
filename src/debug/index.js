var a = "Hello";

function hello(truthy = true) {
  let b = "Hello World";

  const c = "Hello World!";

  if (truthy) {
    let d = "Hello World!!";
    debugger;
  }
}

hello();

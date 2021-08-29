const fruits = (executeTruethy = true) => {
  if (executeTruethy) {
    var fruits1 = "Apple 🍎";
    var fruits2 = "Banana 🍌";
    var fruits3 = "Kiwi 🥝";
  }

  return {
    fruits1,
    fruits2,
    fruits3,
  };
};


export { fruits };

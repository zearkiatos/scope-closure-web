const person = () => {
  var _name = "";

  return {
    getName: () => {
      return _name;
    },
    setName: (name) => {
      _name = name;
    },
  };
};

export { person };

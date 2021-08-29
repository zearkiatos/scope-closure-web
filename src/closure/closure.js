const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  return `MoneyBox: $${saveCoins}`;
};

const moneyBoxClosure = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    return `MoneyBox: $${saveCoins}`;
  };

  return countCoins;
};

export { moneyBox, moneyBoxClosure };

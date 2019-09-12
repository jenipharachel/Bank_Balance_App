const reducer = (state = 100000, action) => {
  switch (action.type) {
    case "inc":
      return state + 10000;
    case "dec":
      if (state === 0) {
        return alert("Bank Balance is 0, credit some amount to account");
      }
      return state - 10000;
    case "reset":
      if (state === 0) {
        return alert("No money available to donate");
      }
      return 0;
    default:
      return state;
  }
};

export default reducer;

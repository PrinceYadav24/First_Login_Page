const istate = {
  Custid: 0,
  mydata: ["A", "B"],
};
const reducer = (state = istate, action) => {
  if (action.type === "Cust_ID") {
    return {
      Custid: action.Customerid,
    };
  }
  return state;
};
export default reducer;

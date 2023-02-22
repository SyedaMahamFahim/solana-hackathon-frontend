import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = (currencyName) => {
  return (dispatch) => {
    axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=523380ab42abd25f9ebdc193dd3b19e7&symbols=USD,GBP,EUR`
      )
      .then((response) => {
        const rates = response.data.rates;
        let currencyRate = 0;
        for (const rate in rates) {
          if (rate === currencyName) {
            currencyRate = rates[rate];
          }
        }
        dispatch({
          type: SET_CURRENCY,
          payload: { currencyName, currencyRate }
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
};

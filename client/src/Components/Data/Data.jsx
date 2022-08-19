import { useSelector } from "react-redux";
import { default as api } from "../redux/store/apiSlice";
import _ from "lodash";

export function useData() {
  let incomeTotal = 0,
    expenseTotal = 0;
  let incomeArray = [];
  let incomeLabel = [];
  let expenseArray = [];
  let expenseLabel = [];
  let expenseData = [];
  let incomeData = [];
  const params = useSelector((state) => state.login.value);
  const { data } = api.useGetTransactionsQuery({ user: params });
  _(data)
    .groupBy("type")
    .map((obj, key) => {
      if (key === "Income") {
        incomeData = _.sortBy(
          _(obj)
            .groupBy("category")
            .map((objs, keys) => {
              return { categories: keys, total: _.sumBy(objs, "amount") };
            })
            .value(),
          "categories"
        );
        incomeTotal = _.sumBy(obj, "amount").length === 0 ? 0 : _.sumBy(obj, "amount");
      }
      if (key === "Expense") {
        expenseData = _.sortBy(
          _(obj)
            .groupBy("category")
            .map((objs, keys) => {
              return { categories: keys, total: _.sumBy(objs, "amount") };
            })
            .value(),
          "categories"
        );
        expenseTotal = _.sumBy(obj, "amount").length === 0 ? 0 : _.sumBy(obj, "amount");
      }
    })
    .value();

  incomeData.map((value) => {
    incomeArray.push(value.total);
    incomeLabel.push(value.categories);
  });
  expenseData.map((value) => {
    expenseArray.push(value.total);
    expenseLabel.push(value.categories);
  });

  const userData = {
    total: incomeTotal - expenseTotal,
    income: incomeArray.length === 0 || incomeArray === undefined ? [100] : incomeArray,
    expense: expenseArray.length === 0 || expenseArray === undefined ? [100] : expenseArray,
    inLabel: incomeLabel.length === 0 || incomeLabel === undefined ? ["Add Something"] : incomeLabel,
    exLabel: expenseLabel.length === 0 || expenseLabel === undefined ? ["Add Something"] : expenseLabel,
    inTotal: incomeTotal === undefined ? 0 : incomeTotal,
    exTotal: expenseTotal === undefined ? 0 : expenseTotal,
  };
  return { userData };
}

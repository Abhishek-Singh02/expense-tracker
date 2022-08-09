import { useSelector } from "react-redux";
import { default as api } from "../redux/store/apiSlice";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { getData } from "../redux/store/dataSlice";

export default function Data() {
  const dispatch = useDispatch();
  let expenseData, incomeData, incomeTotal, expenseTotal;
  const params = useSelector((state) => state.login.value);
  const { data } = api.useGetTransactionsQuery({ user: params });

  _(data)
    .groupBy("type")
    .map((obj, key) => {
      if (key === "Income") {
        incomeData = _(obj)
          .groupBy("category")
          .map((objs, keys) => {
            return { categories: keys, array: objs };
          })
          .value();
        incomeTotal = _.sumBy(obj, "amount");
      }
      if (key === "Expense") {
        expenseData = _(obj)
          .groupBy("category")
          .map((objs, keys) => {
            return { categories: keys, array: objs };
          })
          .value();
        expenseTotal = _.sumBy(obj, "amount");
      }
    })
    .value();
  let incomeCategory = _(incomeData).groupBy("category").value();
  console.log(incomeTotal, expenseTotal);
  const userData = {
    total: expenseTotal + expenseTotal,
    income: 0,
    expense: 0,
    inTotal: incomeTotal === undefined ? 10 : incomeTotal,
    exTotal: expenseTotal === undefined ? 0 : expenseTotal,
  };
  console.log(incomeCategory);
  dispatch(getData(userData));
  return null;
}

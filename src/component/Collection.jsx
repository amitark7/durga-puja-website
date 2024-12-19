import React, { useEffect } from "react";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { getExpenseList, getFundList } from "../store/reducer/reducer";

const Collection = () => {
  const { fundList, expenseList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const totalExpense = expenseList.reduce(
    (total, expense) => total + parseInt(expense.amount),
    0
  );

  const totalFunds = fundList.reduce(
    (total, fund) => total + parseInt(fund.amount),
    0
  );

  useEffect(() => {
    dispatch(getFundList());
    dispatch(getExpenseList());
  }, []);

  return (
    <div
      className="relative flex flex-col sm:flex-row items-center justify-around h-auto sm:h-[200px] p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683121447942-a62eb0aef48e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyJTIwaW1hZ2V8ZW58MHwwfDB8fHww')",
      }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center mb-4 sm:mb-0 text-white">
        <Counter targetAmount={totalFunds} duration={1000} />
        <h1 className="mt-2">कुल जमा राशि</h1>
      </div>
      <div className="relative text-center mb-4 sm:mb-0 text-white">
        <Counter targetAmount={totalExpense} duration={1000} />
        <h1 className="mt-2">खर्च राशि</h1>
      </div>
      <div className="relative text-center text-white">
        <Counter targetAmount={totalFunds - totalExpense} duration={1000} />
        <h1 className="mt-2">शेष राशि</h1>
      </div>
    </div>
  );
};

export default Collection;

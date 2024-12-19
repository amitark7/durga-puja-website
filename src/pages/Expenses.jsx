import React, { useEffect } from "react";
import PageHeader from "../component/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getExpenseList } from "../store/reducer/reducer";

const Expenses = () => {
  const { expenseList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const totalExpense = expenseList.reduce(
    (total, expense) => total + parseInt(expense.amount),
    0
  );

  useEffect(() => {
    dispatch(getExpenseList());
  }, [dispatch]);

  return (
    <>
      <PageHeader text={"Expenses"} />
      <div className="m-auto p-4 bg-yellow-50 py-10">
        <div className="my-4 text-center">
          <h1 className="text-sm text-yellow-500 font-semibold mb-2">
            Expense List
          </h1>
          <h2 className="text-center text-2xl font-bold text-blue-700 mt-2">
            खर्च की गयी राशि:{" "}
            <span className="text-green-600">₹{totalExpense}</span>
          </h2>
        </div>

        {expenseList.length === 0 ? (
          <div className="text-center text-xl my-14 text-gray-500 font-semibold text-lg">
            No expenses available
          </div>
        ) : (
          <div className="w-[80%] m-auto mt-14 overflow-x-auto rounded-lg mb-14">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="px-4 py-2">S.N.</th>
                  <th className="px-4 py-2">उद्देश्य</th>
                  <th className="px-4 py-2">राशि</th>
                  <th className="px-4 py-2">रसीद</th>
                </tr>
              </thead>
              <tbody>
                {expenseList.map((expense, index) => (
                  <tr key={expense.id} className="border-t">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{expense.purpose}</td>
                    <td className="px-4 py-2 text-center">₹{expense.amount}</td>
                    <td className="px-4 py-2 text-center">
                      <span className="text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 32 32"
                          className="w-8 h-8"
                        >
                          <g strokeWidth="0"></g>
                          <g strokeLinecap="round" strokeLinejoin="round"></g>
                          <g>
                            <title>download-cloud</title>
                            <path
                              fill="#000000"
                              d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Expenses;

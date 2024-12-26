import React, { useEffect } from "react";
import PageHeader from "../component/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getFundList } from "../store/reducer/reducer";
import { GoDownload } from "react-icons/go";

const Funds = () => {
  const { fundList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const totalFunds = fundList.reduce(
    (total, fund) => total + parseInt(fund.amount),
    0
  );

  useEffect(() => {
    dispatch(getFundList());
  }, [dispatch]);

  return (
    <>
      <PageHeader text={"Funds"} />
      <div className="m-auto p-4 bg-white py-10 mb-14">
        <div className="my-4 text-center">
          <h1 className="text-sm text-yellow-500 font-semibold mb-2">
            Fund Lists
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">
            चंदा सुची: <span className="text-green-600">(₹{totalFunds})</span>
          </h1>
        </div>
        {fundList.length === 0 ? (
          <div className="text-center text-xl my-14 text-gray-500 font-semibold text-lg">
            No funds available
          </div>
        ) : (
          <div className="w-full lg:w-[80%] m-auto mt-14 overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b-2">
                  <th className="px-4 py-2 text-left text-gray-600">S.N.</th>
                  <th className="px-4 py-2 text-left text-gray-600">नाम</th>
                  <th className="px-4 py-2 text-left text-gray-600">पता</th>
                  <th className="px-4 py-2 text-left text-gray-600">राशि</th>
                  <th className="px-4 py-2 text-left text-gray-600">तिथि</th>
                  <th className="px-4 py-2 text-left text-gray-600">रसीद</th>
                </tr>
              </thead>
              <tbody>
                {fundList.map((fund, index) => (
                  <tr key={fund.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{fund.name}</td>
                    <td className="px-4 py-2">{fund.address}</td>
                    <td className="px-4 py-2">₹{fund.amount}</td>
                    <td className="px-4 py-2">{fund.date}</td>
                    <td className="px-4 py-2 text-center">
                      <a
                        href={fund.reciept}
                        className="text-green-500 hover:text-green-700"
                        target="_blank"
                      >
                        <GoDownload size={18} color="black" />
                      </a>
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

export default Funds;

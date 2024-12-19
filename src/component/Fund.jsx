import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFundList } from "../store/reducer/reducer";
import { Link } from "react-router-dom";

const Fund = () => {
  const { fundList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFundList());
  }, [dispatch]);

  return (
    <div className="m-auto p-4 bg-white py-10">
      {/* Header Section */}
      <div className="my-4 text-center">
        <h1 className="text-sm text-yellow-500 font-semibold mb-2">
          Fund Lists
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold">चंदा सुची</h1>
      </div>

      {/* Table Section */}
      {fundList.length > 0 ? (
        <div className="w-full lg:w-[80%] m-auto mt-14 overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left text-gray-600">S.N.</th>
                <th className="px-4 py-2 text-left text-gray-600">नाम</th>
                <th className="px-4 py-2 text-left text-gray-600">पता</th>
                <th className="px-4 py-2 text-left text-gray-600">राशि</th>
                <th className="px-4 py-2 text-left text-gray-600">तिथि</th>
                <th className="px-4 py-2 text-center text-gray-600">रसीद</th>
              </tr>
            </thead>
            <tbody>
              {fundList.map((fund, index) => (
                <tr key={fund.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{fund.name}</td>
                  <td className="px-4 py-2">{fund.address}</td>
                  <td className="px-4 py-2">{fund.amount}</td>
                  <td className="px-4 py-2">{fund.date}</td>
                  <td className="px-4 py-2 text-center">
                    <a
                      href={fund.receipt}
                      className="text-green-500 hover:text-green-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl mb-14 text-gray-500 mt-14">
          No funds available
        </p>
      )}

      {/* Button Section */}
      {fundList.length > 0 && (
        <div className="text-center mb-8 mt-12">
          <button className="bg-blue-500 text-xs md:text-sm py-3 px-4 rounded-lg text-white font-semibold">
            <Link to="/fund">View More...</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Fund;

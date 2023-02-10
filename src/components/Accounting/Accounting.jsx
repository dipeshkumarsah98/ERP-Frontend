import React from "react";

const Accounting = () => {
  return (
    <>
      <div className="rounded-lg border  border-gray-500 p-3 mt-2">
        <h2 className="color text-black-500 font-medium">Billing</h2>
        <p className="opacity-60 italic">Here is your billing details</p>
      </div>
      <div className=" container row mt-2">
        <div className="col-md-7">
          <div className="rounded-lg border  border-gray-500 p-4 mt-2">
            <h4 className="color text-red-500 font-medium">Remaining Fee</h4>
            <h2 className="font-medium text-2xl mt-2 mb-2">
              Rs 2,90,000 /-<span className="opacity-60 px-2 text-sm">NPR</span>{" "}
            </h2>
            <p className="italic opacity-50 text-xs">
              From Jan 12, 2019 to 20 Feb 2023
            </p>
            <div className="mt-4">
              <button className="bg-blue-700 color text-[#fff] px-4 py-1 rounded-lg">
                Pay
              </button>{" "}
              <button className="bg-[#f8fafb] color px-4 py-1 rounded-lg border border-blue-700 text-black">
                Check History
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="rounded-lg border  border-gray-500 p-4 mt-2">
            <h4 className="color text-green-500 font-medium">Total Fee</h4>
            <h2 className="font-medium text-2xl mt-2 mb-2">
              Rs 20,00,000 /-
              <span className="opacity-60 px-2 text-sm">NPR</span>{" "}
            </h2>
            <p className="italic opacity-50 text-xs">
              From Jan 12, 2019 to 20 Feb 2023
            </p>
            <div className="mt-4">
              <button className="bg-blue-700 color text-[#fff] px-4 py-1 rounded-lg">
                Pay
              </button>{" "}
              <button className="bg-[#f8fafb] color px-4 py-1 rounded-lg border border-blue-700 text-black">
                Fee Structure
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-4 ">
          <div className="rounded-lg border  border-gray-500 p-3 mt-2 mb-2">
            <h2 className="color text-black-500 font-medium">Billing History</h2>
            <p className="opacity-60 italic">Keep track of billing details</p>
          </div>
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">March 3 , 2012</td>
                <td className="border px-4 py-2">Rs 50,000 /-</td>
                <td className="border px-4 py-2">
                  <p className="bg-green-500 text-center text-[#fff]">Paid</p>
                </td>
                <td className="border px-4 py-2">Rs 2,90,000 /-</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border px-4 py-2">Feb 30 , 2021</td>
                <td className="border px-4 py-2">Rs 110,000 /-</td>
                <td className="border px-4 py-2">
                  <p className="bg-green-500 text-center text-[#fff]">Paid</p>
                </td>
                <td className="border px-4 py-2">Rs 4,00,000 /-</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">May 12 , 2020</td>
                <td className="border px-4 py-2">Rs 5,00,000 /-</td>
                <td className="border px-4 py-2">
                  <p className="bg-green-500 text-center text-[#fff]">Paid</p>
                </td>
                <td className="border px-4 py-2">Rs 9,00,000 /-</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border px-4 py-2">Jan 8 , 2019</td>
                <td className="border px-4 py-2">Rs 3,00,000 /-</td>
                <td className="border px-4 py-2">
                  <p className="bg-green-500 text-center text-[#fff]">Paid</p>
                </td>
                <td className="border px-4 py-2">Rs 12,00,000 /-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Accounting;

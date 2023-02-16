import React, { useState } from "react";
import qrcode from "../../assets/qrcode.png";
import RecipeReviewCard from "./AccountingCard";
const Accounting = () => {
  const [seeFeeStructure, setSeeFeeStructure] = useState(false);
  const seeFeeHandler = (e) => {
    e.preventDefault();
    setSeeFeeStructure(!seeFeeStructure);
  };
  return (
    <>
      {/* <div className="rounded-lg border  border-gray-500 p-3 mt-2"> */}
      <div className="bg-[#FAFAFA]">
        <h1 className="my-2 text-xs font-semibold font-openSans uppercase text-blue-500 border border-zinc-500 py-2 px-3 bg-slate-100 shadow-sm md:text-2xl xl:text-2xl">
          Billing
        </h1>
        <div className="grid grid-cols-3 gap-4 text-center pb-4 mt-4">
          <RecipeReviewCard
            title="Remaining Fee"
            color="red"
            buttonText="See Billing History"
            handler={seeFeeHandler}
          />
          <RecipeReviewCard
            title="Remaining Fee"
            color="red"
            buttonText="See Billing History"
            handler={seeFeeHandler}
          />
          <RecipeReviewCard
            title="Upcoming Fee"
            color="green"
            buttonText="See Fee Structure"
            handler={seeFeeHandler}
          />
        </div>

        <div className="rounded-lg border bg-white border-gray-500 p-4 ">
          <div className="grid grid-cols-4 gap-2">
            <div className="border p-2 shadow-sm">
              <div className="flex justify-center mx-3">
                <img
                  className="h-[20vh] w-[20vh] object-cover"
                  src={qrcode}
                  alt=""
                />
              </div>
            </div>
            <div className="border p-2 shadow-sm">
              <h4 className="color text-green-500 font-bold font-openSans">
                NMB Bank
              </h4>
              <div>
                <div className=" p-2 rounded-lg">
                  <p>
                    <span className="font-bold">Branch</span>: Tinkune,
                    Kathmandu{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold"> Account Name</span> :
                    International School of Management Account
                  </p>
                  <p>
                    <span className="font-bold">No .</span>
                    :0750057933400051
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-2 shadow-sm">
              <h4 className="color text-green-500 font-bold font-openSans">
                Prabhu Bank
              </h4>
              <div>
                <div className=" p-2 rounded-lg">
                  <p>
                    <span className="font-bold">Branch</span>: Babarmahal,
                    Kathmandu
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold"> Account Name</span> :
                    International School of Mgmt & Tech
                  </p>
                  <p>
                    <span className="font-bold">No .</span>
                    :0010075654500011
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-2 shadow-sm">
              <h4 className="color text-green-500 font-bold font-openSans">
                Prime Commercial Bank
              </h4>
              <div>
                <div className=" p-2 rounded-lg">
                  <p>
                    <span className="font-bold">Branch</span>: Bagbazzar
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold"> Account Name</span> : Int'l
                    School of Mgmt and Technology
                  </p>
                  <p>
                    <span className="font-bold">No .</span>
                    :001800046CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {seeFeeStructure ? (
          <div className="container mt-4">
            {/* <div className="rounded-lg border  border-gray-500 px-4 py-3 mt-2 mb-2 flex justify-between">
                <div>
                  <h2 className="color text-black-500 font-medium font-openSans">
                    Fee Structure
                  </h2>
                  <p className="opacity-60 italic font-roboto">
                    See fee structure year wised
                  </p>
                </div>
                <div>
                  <button className="bg-blue-500 text-white rounded-sm py-1 px-3">
                    Download Fee Structure
                  </button>
                </div>
              </div> */}
            <div className="h-[36vh] overflow-y-scroll">
              <div>
                <h2 className="flex justify-center m-6 font-openSans">
                  First year
                </h2>
                <table className="table-auto w-full text-center">
                  <thead>
                    <tr className="bg-gray-300">
                      <th className="px-4 py-2">Particulars</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">When To Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">Admission Fee</td>
                      <td className="border px-4 py-2">Rs 90,000 /-</td>
                      <td className="border px-4 py-2">
                        At the time of Admission
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">
                        Tuition Fee for First Semester
                      </td>
                      <td className="border px-4 py-2">Rs 110,000 /-</td>
                      <td className="border px-4 py-2">
                        Before the 1st Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">
                        Tuition Fee for Second Semester
                      </td>
                      <td className="border px-4 py-2">Rs 5,00,000 /-</td>
                      <td className="border px-4 py-2">
                        Before the 2nd Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">Sub Total</td>
                      <td className="border px-4 py-2">Rs 3,00,000 /-</td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="col-span-3 bg-gray-200 border px-4 py-2"
                      >
                        <strong>
                          Pay Year 1 fees at once and get 10% waiver on Tuition
                          Fees
                          <br />
                          Pay Rs. 2,70,000.00 instead of&nbsp;
                          <del>Rs. 2,90,000.00</del>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h2 className="flex justify-center m-6 font-openSans">
                  Second year
                </h2>
                <table className="table-auto w-full text-center">
                  <thead>
                    <tr className="bg-gray-300">
                      <th className="px-4 py-2">Particulars</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">When To Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">
                        Tuition Fee for Third Semester
                      </td>
                      <td className="border px-4 py-2">Rs 100,000 /-</td>
                      <td className="border px-4 py-2">
                        {" "}
                        Before the 3rd Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">
                        Tuition Fee for Fourth Semester
                      </td>
                      <td className="border px-4 py-2">Rs 100,000 /-</td>
                      <td className="border px-4 py-2">
                        Before the 4th Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">Sub Total</td>
                      <td className="border px-4 py-2">Rs 200,000 /-</td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="col-span-3 bg-gray-200 border px-4 py-2"
                      >
                        <strong>
                          Pay Year 2 fees at once and get 10% waiver on Tuition
                          Fees
                          <br />
                          Pay Rs. 1,80,000.00 instead of&nbsp;
                          <del> Rs. 2,00,000.00</del>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h2 className="flex justify-center m-6 font-openSans">
                  Final year
                </h2>
                <table className="table-auto w-full text-center">
                  <thead>
                    <tr className="bg-gray-300">
                      <th className="px-4 py-2">Particulars</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">When To Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border px-4 py-2">
                        Tuition Fee for Fifth Semester
                      </td>
                      <td className="border px-4 py-2">Rs. 1,05,000.00 /-</td>
                      <td className="border px-4 py-2">
                        Before the 5th Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">
                        Tuition Fee for Sixth Semester
                      </td>
                      <td className="border px-4 py-2">Rs. 1,05,000.00 /-</td>
                      <td className="border px-4 py-2">
                        Before the 6th Semester Starts
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border px-4 py-2">Sub Total</td>
                      <td className="border px-4 py-2">Rs. 2,10,000.00 /-</td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="col-span-3 bg-gray-200 border px-4 py-2"
                      >
                        <strong>
                          Pay Year 3 fees at once and get 10% waiver on Tuition
                          Fees Fees
                          <br />
                          Pay Rs. 1,89,000.00 instead of&nbsp;
                          <del>Rs. 2,10,000.00</del>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mt-4 ">
            {/* <div className="rounded-lg border  border-gray-500 p-3 mt-2 mb-2">
                <h2 className="color text-black-500 font-medium font-openSans">
                  Billing History
                </h2>
                <p className="opacity-60 italic font-roboto">
                  Keep track of billing details
                </p>
              </div> */}
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
        )}
      </div>
    </>
  );
};

export default Accounting;

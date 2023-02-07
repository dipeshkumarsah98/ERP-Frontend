import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center mt-3 border border-gray-300 px-5 py-10">
        <div>
          <img
            src="https://i.pinimg.com/736x/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg"
            alt="student-image"
            className="w-32 border border-gray-300 p-2"
          />
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td>Name: Dipesh kumar sah</td>
              <td>Email: kac22.26dks@ismt.edu.np</td>
            </tr>
            <tr>
              <td>Date of birth: 2002/1/2</td>
              <td>Registration number: R87682</td>
            </tr>
            <tr>
              <td>Phone: 9808982517</td>
              <td>Section: A</td>
            </tr>
            <tr>
              <td>Program: IT</td>
              <td>Sex: Male</td>
            </tr>
            <tr>
              <td>Address: Jadibuti, Kathmandu</td>
              <td>Parent name: Rajesh kumar sah</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserProfile;

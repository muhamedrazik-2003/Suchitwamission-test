import React from "react";

function AuthForm() {
  return (
    <div className="bg-white rounded-3xl text-center space-y-5 px-[30px] py-5 shadow-2xl w-[340px]">
      <h3>New Registration</h3>
      <form action="" className="space-y-5">
        <div className="space-y-5">
          <input
            type="text"
            className="py-2 px-6 w-full border border-gray-300 rounded-sm"
            placeholder="Name of Company"
          />
          <input
            type="text"
            className="py-2 px-6  w-full border border-gray-300 rounded-sm"
            placeholder="mobile Number"
          />
          <input
            type="email"
            className="py-2 px-6  w-full border border-gray-300 rounded-sm"
            placeholder="Email"
          />
          <input
            type="password"
            className="py-2 px-6  w-full border border-gray-300 rounded-sm"
            placeholder="Password"
          />
        </div>
        <button className="bg-green-700 py-2 px-6 rounded-lg text-white w-full">Submit</button>
      </form>
    </div>
  );
}

export default AuthForm;

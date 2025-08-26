"use client";

import React, { useState } from "react";

function AuthForm({ isRegistering }: { isRegistering: boolean }) {
  const [userData, setUserData] = useState({
    companyName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = storedUsers.find(
      (user) => user.mobile === userData.mobile
    );

    if (isRegistering) {
      if (
        userData.companyName === "" ||
        userData.email === "" ||
        userData.mobile === "" ||
        userData.password === ""
      ) {
        return alert("Please add all fields");
      }

      if (existingUser) {
        alert("User already exists");
      } else {
        storedUsers.push(userData);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("User registered successfully!");
      }
    } else {
      if (userData.mobile === "" || userData.password === "") {
        return alert("Please add all fields");
      }

      if (!existingUser) {
        alert("User not found!");
      } else if (existingUser.password === userData.password) {
        alert("User login successful");
      } else {
        alert("Incorrect password!");
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl text-center space-y-5 px-[30px] py-5 shadow-2xl w-[340px]">
      {isRegistering ? <h3>New Registration</h3> : <h3>Login</h3>}
      <form action="" className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-5">
          {isRegistering && (
            <input
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, companyName: e.target.value })
              }
              className="py-2 px-6 w-full border border-gray-300 rounded-sm"
              placeholder="Name of Company"
              required
              minLength={4}
            />
          )}

          <input
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
            className="py-2 px-6  w-full border border-gray-300 rounded-sm"
            placeholder="Mobile Number"
            required
          />
          {isRegistering && (
            <input
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="py-2 px-6  w-full border border-gray-300 rounded-sm"
              placeholder="Email"
              required
            />
          )}

          <input
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="py-2 px-6  w-full border border-gray-300 rounded-sm"
            placeholder="Password"
            required
            minLength={4}
            maxLength={8}
          />
        </div>
        <button className="bg-green-700 py-2 px-6 rounded-lg text-white w-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthForm;

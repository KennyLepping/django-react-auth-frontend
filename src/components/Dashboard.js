import React from "react";

export default function Dashboard() {
  let userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <p className="text-3xl mb-6">Welcome {userDetails.username}</p>
        <p className="text-3xl">Email: {userDetails.email}</p>
      </div>
    </div>
  );
}

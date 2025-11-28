import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="bg-zinc-800 text-white p-4 m-4 rounded-lg text-center text-2xl font-bold ">
      User ID: {userid}
    </div>
  );
}

export default User;

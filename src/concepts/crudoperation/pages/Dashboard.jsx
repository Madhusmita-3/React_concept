import React, { useEffect, useState } from "react";
import { FaMoon, FaUserEdit } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdAccountBalanceWallet, MdOutlineNoteAdd, MdEditNote } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const Dashboard = () => {

  const [user, setUser] = useState({});

  useEffect(() => {

    const id = localStorage.getItem("user_id");

    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-200">

      {/* NAVBAR */}
      <div className="h-[70px] w-full bg-white flex justify-around items-center p-2">

        <div className="w-[20%] text-2xl font-bold text-indigo-500">
          Welcome to Dashboard
        </div>

        <div className="relative w-[50%] mx-auto bg-amber-50 rounded-2xl">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="search"
            placeholder="Search for projects"
            className="w-full pl-10 pr-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>

        <div className="flex gap-7 items-center text-purple-500">
          <FaMoon size={25} />

          <div className="relative">
            <RiNotification2Fill size={25} />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-600"></div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-[20%] bg-white flex flex-col gap-10 p-6">

          <div className="flex gap-5 items-center text-lg font-bold">
            <AiOutlineHome size={30}/>
            Dashboard
          </div>

          <div className="flex gap-5 items-center text-lg font-bold">
            <img
              src="https://i.pinimg.com/736x/63/f6/39/63f6391faa4c52309bbe8819ff32fa85.jpg"
              alt="profile"
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            Profile
          </div>

          <div className="flex gap-5 items-center text-lg font-bold">
            <FaUserEdit size={30}/>
            Update Profile
          </div>

          <div className="flex gap-5 items-center text-lg font-bold">
            <MdOutlineNoteAdd size={30}/>
            Add Notes
          </div>

          <div className="flex gap-5 items-center text-lg font-bold">
            <MdEditNote size={30}/>
            Update Mynotes
          </div>

          <div className="h-10 w-40 bg-purple-600 rounded-xl text-white flex justify-center items-center mt-4">
            Logout
          </div>

        </div>

        {/* DASHBOARD CONTENT */}
        <div className="flex-1 bg-gray-300 p-6 overflow-y-auto">

          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="bg-purple-600 text-white p-3 rounded-xl flex justify-between mb-6">
            <span>Star this project on GitHub</span>
            <span>View more</span>
          </div>

          {/* CARDS */}
          <div className="flex gap-5 flex-wrap mb-6">

            <div className="h-20 w-56 bg-white flex items-center gap-4 px-4 rounded-xl shadow">
              <HiUserGroup className="text-orange-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Total Clients</p>
                <p className="font-bold">6389</p>
              </div>
            </div>

            <div className="h-20 w-56 bg-white flex items-center gap-4 px-4 rounded-xl shadow">
              <MdAccountBalanceWallet className="text-green-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Account Balance</p>
                <p className="font-bold">$46,760</p>
              </div>
            </div>

            <div className="h-20 w-56 bg-white flex items-center gap-4 px-4 rounded-xl shadow">
              <BsCart3 className="text-blue-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">New Sales</p>
                <p className="font-bold">376</p>
              </div>
            </div>

            <div className="h-20 w-56 bg-white flex items-center gap-4 px-4 rounded-xl shadow">
              <LuMessageSquareMore className="text-cyan-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Pending Contacts</p>
                <p className="font-bold">35</p>
              </div>
            </div>

          </div>

          {/* USER CARD */}
          <div className="bg-white shadow-xl rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-2xl transition duration-300">

              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.pinimg.com/736x/63/f6/39/63f6391faa4c52309bbe8819ff32fa85.jpg"
                  alt="user"
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"/>
            
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Age:</span> {user.age}</p>
                <p><span className="font-semibold">City:</span> {user.city}</p>
                <p><span className="font-semibold">Gender:</span> {user.gender}</p>
              </div>
            
          </div>



        </div>
      </div>
    </div>
  );
};

export default Dashboard;
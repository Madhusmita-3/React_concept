import React, { useEffect, useState } from "react";
import { FaMoon, FaWpforms } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { RiNotification2Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { CgChart } from "react-icons/cg";
import { LuMousePointerClick, LuMessageSquareMore } from "react-icons/lu";
import { MdOutlinePages, MdTableRows, MdAccountBalanceWallet } from "react-icons/md";
import { PiCardsThreeDuotone } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-200">

      {/* ================= NAVBAR ================= */}
      <div className="h-[70px] w-full bg-white flex justify-around items-center p-2">

        <div className="w-[20%] text-2xl font-bold">Windmill</div>

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

      {/* ================= BODY ================= */}
      <div className="flex flex-1 overflow-hidden">

        {/* ========== SIDEBAR ========== */}
        <div className="w-[20%] bg-white flex flex-col gap-6 p-6">

          <div className="flex gap-5 items-center text-lg font-bold">
            <AiOutlineHome />
            Dashboard
          </div>

          <div className="flex gap-5 items-center text-lg">
            <FaWpforms />
            Forms
          </div>

          <div className="flex gap-5 items-center text-lg">
            <PiCardsThreeDuotone />
            Cards
          </div>

          <div className="flex gap-5 items-center text-lg">
            <CgChart />
            Charts
          </div>

          <div className="flex gap-5 items-center text-lg">
            <LuMousePointerClick />
            Buttons
          </div>

          <div className="flex gap-5 items-center text-lg">
            <IoCopyOutline />
            Modals
          </div>

          <div className="flex gap-5 items-center text-lg">
            <MdTableRows />
            Tables
          </div>

          <div className="flex gap-5 items-center text-lg">
            <MdOutlinePages />
            Pages
          </div>

          <div className="h-10 w-40 bg-purple-600 rounded-xl text-white flex justify-center items-center mt-4">
            Create account +
          </div>
        </div>

        {/* ========== DASHBOARD CONTENT ========== */}
        <div className="flex-1 bg-gray-300 p-6 overflow-y-auto">

          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="bg-purple-600 text-white p-3 rounded-xl flex justify-between mb-6">
            <span>Star this project on GitHub</span>
            <span>View more</span>
          </div>

          {/* Cards */}
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

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="grid grid-cols-4 px-6 py-3 bg-gray-100 text-sm font-semibold text-gray-500">
              <span>CLIENT</span>
              <span>AMOUNT</span>
              <span>STATUS</span>
              <span>DATE</span>
            </div>

            {loading ? (
              <p className="p-6">Loading...</p>
            ) : (
              users.map((user) => (
                <div key={user.id} className="grid grid-cols-4 px-6 py-4 border-t">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{user.login}</span>
                  </div>

                  <div>$ {(Math.random() * 1000).toFixed(2)}</div>
                  <div className="text-green-600">Success</div>
                  <div>{new Date().toLocaleDateString()}</div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard
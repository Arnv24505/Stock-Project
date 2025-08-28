import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import stocksData from "../Data/mockData.json";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
} from "chart.js";
import { BsBell, BsSearch, BsList, BsChevronLeft } from 'react-icons/bs'; // Add new icons

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [stocks, setStocks] = useState([]);
  const [balance, setBalance] = useState(10000);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


useEffect(() => {
  setStocks(stocksData.stocks || []);  
}, []);

 // Empty dependency array means this runs once on component mount

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen ? (
            <h1 className="text-2xl font-bold text-gray-800">StockTracker</h1>
          ) : (
            <h1 className="text-2xl font-bold text-gray-800">ST</h1>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <BsChevronLeft className={`text-gray-600 transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
          </button>
        </div>
        <nav className="mt-4">
          <button
            className={`w-full p-4 text-left flex items-center ${
              activeTab === 'portfolio' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('portfolio')}
          >
            {/* You can add icons here */}
            {isSidebarOpen ? (
              <span>Portfolio</span>
            ) : (
              <span className="mx-auto">P</span>
            )}
          </button>
          <button
            className={`w-full p-4 text-left flex items-center ${
              activeTab === 'transactions' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('transactions')}
          >
            {isSidebarOpen ? (
              <span>Transactions</span>
            ) : (
              <span className="mx-auto">T</span>
            )}
          </button>
        </nav>
      </div>

      {/* Main Content with Top Bar */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          {/* Left Side - Greeting */}
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full mr-4"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <BsList className="text-xl text-gray-600" />
            </button>
            <h2 className="text-lg font-medium text-gray-800">
              Hello, <span className="text-emerald-600">John Doe</span>
            </h2>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-64">
              <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <BsBell className="text-xl text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="flex items-center">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Portfolio</h2>
              <p className="text-gray-600">Track your investments</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-600">Available Balance</p>
                <p className="text-xl font-bold text-gray-800">${balance.toFixed(2)}</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Add Funds
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Performance Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Portfolio Performance</h3>
                <select className="text-sm text-gray-600 border rounded p-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-48">
                <Line
                  data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                      data: [65, 59, 80, 81, 56, 55, 40],
                      borderColor: '#9333ea',
                      backgroundColor: 'rgba(147, 51, 234, 0.1)',
                      fill: true,
                      tension: 0.4
                    }]
                  }}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { grid: { display: false } },
                      y: { grid: { display: false } }
                    }
                  }}
                />
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-800 mb-4">Total Profit/Loss</h3>
              <div className="text-2xl font-bold text-green-500">+$2,456.00</div>
              <p className="text-gray-600">+12.5% from initial investment</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-800 mb-4">Portfolio Value</h3>
              <div className="text-2xl font-bold text-gray-800">$12,456.00</div>
              <p className="text-gray-600">Across 8 stocks</p>
            </div>
          </div>

          {/* Stocks Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="font-semibold text-gray-800">Your Stocks</h3>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profit/Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stocks.map(stock => (
                  <tr key={stock.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <div className="font-medium text-gray-900">{stock.name}</div>
                          <div className="text-sm text-gray-500">{stock.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{stock.quantity}</td>
                    <td className="px-6 py-4 text-gray-900">${stock.avgPrice}</td>
                    <td className="px-6 py-4 text-gray-900">${stock.currentPrice}</td>
                    <td className="px-6 py-4">
                      <span className={`${
                        stock.profit >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stock.profit >= 0 ? '+' : ''}{stock.profit}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
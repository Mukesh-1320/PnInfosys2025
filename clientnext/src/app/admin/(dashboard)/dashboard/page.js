'use client'
import React from 'react'

function page() {
  return (
    <>
    <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin 👋</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-600">Total Users</h2>
            <p className="text-2xl font-bold text-blue-600 mt-2">120</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-600">New Signups</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">15</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-600">Pending Requests</h2>
            <p className="text-2xl font-bold text-red-600 mt-2">4</p>
          </div>
        </div>
  
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ User <b>Vikash</b> signed up</li>
            <li>✅ 3 new job applications received</li>
            <li>⚠ 1 request pending approval</li>
            <li>ℹ System health: <span className="text-green-600 font-medium">Good</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
